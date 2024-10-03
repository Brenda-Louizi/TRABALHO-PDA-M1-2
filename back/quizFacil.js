var pagina = 0;
let pergunta = [
  {
    titulo: "Quando Kratos se torna o novo deus da guerra?",
    alternativa: [
      "depois de matar Atena.",
      "depois de matar Ares.",
      "depois de matar Zeus.",
      "depois de matar Átropos.",
    ],
    correta: 1, // Corrigido para o índice correto depois de matar Ares depois de matar Zeus
  },
  {
    titulo: "Qual material é necessário para criar a armadura de Meteorite?",
    alternativa: ["Hellstone.", "Demonite.", "Meteorite.", "Crimtane."],
    correta: 2,
  },
  {
    titulo: "Como pedir alguém em namoro no Stardew Valley?",
    alternativa: [
      "dando um anel.",
      "dando uma rosa.",
      "dando um buquê especial.",
      "dando um anel especial.",
    ],
    correta: 2,
  },
  {
    titulo: "Em que ano o jogo Fortnite foi lançado?",
    alternativa: ["2014.", "2017.", "2019.", "2021."],
    correta: 1,
  },
  {
    titulo: "Qual cidade de Runeterra deu origem ao Teemo?",
    alternativa: ["Bandópolis.", "Demacia.", "Ionia.", "O Vazio."],
    correta: 0,
  },
  {
    titulo: "O que o mob Creeper de Minecraft era para ser no começo?",
    alternativa: ["Vaca.", "Vilager Zumbi.", "Porco Mutante.", "Enderman."],
    correta: 2,
  },
];

let app = {
  start: function () {
    this.Atualpos = 0;
    this.Totalpontos = 0;
    let alts = document.querySelectorAll(".alternativa");
    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.checaResposta(index);
      });
    });
    // Oculta o botão de "Next" no início
    document.getElementById("nextButton").style.display = "none";
    this.atualizaPontos();
    app.mostraQuestao(pergunta[this.Atualpos]);
  },

  mostraQuestao: function (q) {
    this.qatual = q;
    // Mostrando o título
    let titleDiv = document.getElementById("titulo");
    titleDiv.textContent = q.titulo;
    // Mostrando as alternativas
    let alts = document.querySelectorAll(".alternativa");
    alts.forEach(function (element, index) {
      element.textContent = q.alternativa[index];
    });
  },

  Proximaperg: function () {
    this.Atualpos++;
    if (this.Atualpos == pergunta.length) {
      this.Atualpos = 0;
    }
  },

  checaResposta: function (user) {
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
      document.getElementById("nextButton").style.display = "block";
      localStorage.setItem("score", this.Totalpontos);
      pagina++;
    } else {
      this.Proximaperg();
      this.mostraQuestao(pergunta[this.Atualpos]);
    }
  },

  atualizaPontos: function () {
    let scoreDiv = document.getElementById("pontos");
    scoreDiv.textContent = `Pontos: ${this.Totalpontos}`;
  },

  mostrareposta: function (correto) {
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

  resetarJogo: function () {
    alert("VOCÊ PERDEU O JOGO");
    location.href = "index.html";
  },
};

// Função do botão "Next"
document.getElementById("nextButton").addEventListener("click", function () {
  if (pagina === 1) {
    location.href = "quiz2.html";
  }
  // location.href = "index.html"; // Pode redirecionar para outra página ou reiniciar o quiz
});

app.start();
