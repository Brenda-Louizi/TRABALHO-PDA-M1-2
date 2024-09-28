let pergunta = [ 
    { 
        titulo: "Quando Kratos se torna o novo deus da guerra?", 
        alternativa: ["A-depois de matar Atena.", "B-depois de matar Zeus.", "C-depois de matar Ares.", "D-depois de matar Átropos."], 
        correta: 1 // Corrigido para o índice correto
    }, 
    { 
        titulo: "Qual material é necessário para criar a armadura de Meteorite?", 
        alternativa: ["A) Hellstone.", "B) Demonite.", "C) Meteorite.", "D) Crimtane."], 
        correta: 2 
    }, 
    { 
        titulo: "Como pedir alguém em namoro no Stardew Valley?", 
        alternativa: ["A) dando um anel.", "B) dando uma rosa.", "C) dando um buquê especial.", "D) dando um anel especial."], 
        correta: 2 
    }, 
    { 
        titulo: "Em que ano o jogo Fortnite foi lançado?", 
        alternativa: ["A) 2014.", "B) 2017.", "C) 2019.", "D) 2021."], 
        correta: 1 
    }, 
    { 
        titulo: "Qual cidade de Runeterra deu origem ao Teemo?", 
        alternativa: ["A) Bandópolis.", "B) Demacia.", "C) Ionia.", "D) O Vazio."], 
        correta: 0 
    }, 
    { 
        titulo: "O que o mob Creeper de Minecraft era para ser no começo?", 
        alternativa: ["A) Vaca.", "B) Vilager Zumbi.", "C) Porco Mutante.", "D) Enderman."], 
        correta: 2 
    } 
];

let app = { 
    start: function() { 
        this.Atualpos = 0; 
        this.Totalpontos = 0; 
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
        if (this.Totalpontos === 6) { 
            document.getElementById('nextButton').style.display = 'block'; 
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
    alert("Parabéns, você completou o quiz!");
    location.href = "index.html"; // Pode redirecionar para outra página ou reiniciar o quiz
});

app.start();
