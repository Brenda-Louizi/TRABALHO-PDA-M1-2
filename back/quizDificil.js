var pagina = 0 
let pergunta = [ 
    { 
        titulo: "Qual o nome da mãe de Zeus?", 
        alternativa: ["A) Gaia ", "B) Láquesis", "C) Cloto", "D) Reia"], 
        correta: 3// Corrigido para o índice correto
    }, 
    { 
        titulo: "Qual personagem de street fighter é brasileiro?", 
        alternativa: ["A) Blanka", "B) Laura Matsuda", "C) Chun-Li ", "D) Ryu"], 
        correta: 1
    }, 
    { 
        titulo: "Qual é o nome do evento que é desencadeado ao usar a 'Suspicious Looking Skull'", 
        alternativa: ["A) Pumpkin Moon.", "B) Frost Moon", "C) Solar Eclipse.", " D) Old One's Army."], 
        correta: 3
    }, 
    { 
        titulo: "Qual é o número máximo de máteriais(madeira, pedra, metal) que um jogador pode carregar de cada tipo em Fortnite?", 
        alternativa: ["A) 750", "B) 1000", "C) 500", "D) 999"], 
        correta: 2
    }, 
    { 
        titulo: "Qual jogo deu origem a Counter-Strike?", 
        alternativa: ["A) GTA San Andreas", "B) Gmode", " C) Battlefield 2 ", "D) Half-Life"], 
        correta: 3
    }, 
    { 
        titulo: "Qual foi a data de lançamento do Minecraft?", 
        alternativa: ["A) 18 de novembro de 2011", "B) 21 de Julho de 2011", "C)1 de Setembro de 2011", "D) 15 de Julho de 2011"], 
        correta: 2 
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
        if (this.Totalpontos === 18) { 
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
        location.href ="final.html";
    }
    // location.href = "index.html"; // Pode redirecionar para outra página ou reiniciar o quiz
});

app.start();
