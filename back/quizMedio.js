var pagina = 0 
let pergunta = [ 
    { 
        titulo: "Como Kratos perde sua divindide??", 
        alternativa: ["A) Na luta contra Ares.", "B) Lutando contra as Moiras.", "C) Colocando-a na espada de Zeus.", "D) No mundo dos mortos."], 
        correta: 2 // Corrigido para o índice correto
    }, 
    { 
        titulo: "Qual é o nome do primeiro chefe que os jogadores geralmente enfrentam em Terraria?", 
        alternativa: ["A) King Slime ", "B) Eye of Cthulhu.", "C) Skeletron.", "D) Wall of Flesh."], 
        correta: 1
    }, 
    { 
        titulo: "Média em qual versão de mortal Kombat, o Baraka teve sua primeira aparição?", 
        alternativa: ["A) Mortal Kombat II.", "B) Mortal Kombat III.", "C) Mortal Kombat XI.", "D) Baraka está em todas as versões."], 
        correta: 0
    }, 
    { 
        titulo: "Qual o nome da área do mapa que era conhecida por suas grandes construções em Fortnite Capítulo 1?", 
        alternativa: [" A) Torres Tortas.", "B) Alameda Arborizada.", "C) Parque Agradável.", "D) Via do Varejo."], 
        correta: 0
    }, 
    { 
        titulo: "Qualquer super herói que apareceu no como comando Tony halk pro skater 2?", 
        alternativa: ["A) Batman.", "B) Super homem.", "C) Homem aranha.", "D) Capitão América."], 
        correta: 2
    }, 
    { 
        titulo: "qual é o mob que ganhou a votação de 2023?", 
        alternativa: ["A) Allay.", "B) Tatu.", "C) Carangueijo.", "D) Enderman."], 
        correta: 1
    } 
];

let app = { 
    start: function() { 
        this.Atualpos = 0; 
        this.score = localStorage.getItem("score")
        this.Totalpontos = this.score; 
        let alts = document.querySelectorAll('.alternativa'); 
        alts.forEach((element, index) => { 
            element.addEventListener('click', () => { 
                this.checaResposta(index); 
            }); 
        });
        // Oculta o botão de "Next" no início
        document.getElementById('nextButton').style.display = 'none'; 
        this.atualizaPontos(); 
        app.mostraQuestao(pergunta[this.Atualpos]); 
    },

    mostraQuestao: function(q) { 
        this.qatual = q; 
        // Mostrando o título 
        let titleDiv = document.getElementById("titulo"); 
        titleDiv.textContent = q.titulo; 
        // Mostrando as alternativas 
        let alts = document.querySelectorAll('.alternativa'); 
        alts.forEach(function(element, index) { 
            element.textContent = q.alternativa[index]; 
        }); 
    },

    Proximaperg: function() { 
        this.Atualpos++; 
        if (this.Atualpos == pergunta.length) { 
            this.Atualpos = 0; 
        } 
    },

    checaResposta: function(user) { 
        if (this.qatual.correta == user) { 
            console.log("Correta"); 
            this.Totalpontos++; 
            this.mostrareposta(true); 
        } else { 
            console.log("Errada"); 
            this.mostrareposta(false); 
            this.resetarJogo();
        }

        this.atualizaPontos(); 
        // Se a pontuação chegar a 6, exibe o botão "Next"
        if (this.Totalpontos === 12) { 
            document.getElementById('nextButton').style.display = 'block'; 
            localStorage.setItem("score", this.Totalpontos)
            pagina++
        } else { 
            this.Proximaperg(); 
            this.mostraQuestao(pergunta[this.Atualpos]); 
        }
    },

    atualizaPontos: function() { 
        let scoreDiv = document.getElementById("pontos"); 
        scoreDiv.textContent = `Pontos: ${this.Totalpontos}`; 
    },

    mostrareposta: function(correto) { 
        let resultDiv = document.getElementById("result"); 
        let result = ``; 
        if (correto == true) { 
            result = `Resposta Correta!`; 
        } else { 
            let perguntaAtual = pergunta[this.Atualpos]; 
            let cindice = perguntaAtual.correta; 
            let ctexto = perguntaAtual.alternativa[cindice]; 
            result = `Incorreto!`; 
        } 
        resultDiv.textContent = result; 
    },
    
    resetarJogo:function(){
        alert("VOCÊ PERDEU O JOGO");
        location.href ="index.html"
    }
};

// Função do botão "Next"
document.getElementById('nextButton').addEventListener('click', function() {
    if(pagina===1){
        location.href ="quiz3.html";
    }
    // location.href = "index.html"; // Pode redirecionar para outra página ou reiniciar o quiz
});

app.start();
