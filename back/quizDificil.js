var body = document.body;
// Define a imagem de fundo
body.style.backgroundImage = "url('../assets/images/background-dificil.jpg')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";

var titulo = document.getElementById("titulo");

// Muda a cor do texto
titulo.style.color = "#a3911c";

var perguntas = document.querySelector(".perguntas");
perguntas.style.backgroundColor = "rgba(90, 22, 11)";

var buttons = document.querySelectorAll(".respostas button");

buttons.forEach(function (button) {
  button.style.backgroundColor = "rgba(90,22,11)"; // Cor de fundo desejada
  button.style.color = "#a3911c"
  button.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#fd0f0f"; // Cor ao passar o mouse
  });

  button.addEventListener("mouseout", function () {
    this.style.backgroundColor = "rgba(90,22,11)"; // Restaura a cor original
  });
});


var pagina = 0;
let pergunta = [
  {
    titulo: "Qual o nome da mãe de Zeus?",
    alternativa: ["Gaia ", "Láquesis", "Cloto", "Reia"],
    correta: 3, // Corrigido para o índice correto
  },
  {
    titulo: "Qual personagem de Street Fighter é brasileiro?",
    alternativa: ["Blanka", "Laura Matsuda", "Chun-Li ", "Ryu"],
    correta: 1,
  },
  {
    titulo:
      "Qual é o nome do evento que é desencadeado ao usar a 'Suspicious Looking Skull'",
    alternativa: [
      "Pumpkin Moon.",
      "Frost Moon",
      "Solar Eclipse.",
      "Old One's Army.",
    ],
    correta: 3,
  },
  {
    titulo:
      "Qual é o número máximo de máteriais(madeira, pedra, metal) que um jogador pode carregar de cada tipo em Fortnite?",
    alternativa: ["750", "1000", "500", "999"],
    correta: 2,
  },
  {
    titulo: "Qual jogo deu origem a Counter-Strike?",
    alternativa: ["GTA San Andreas", "Gmode", "Battlefield 2 ", "Half-Life"],
    correta: 3,
  },
  {
    titulo: "Qual foi a data de lançamento do Minecraft?",
    alternativa: [
      "18 de novembro de 2011",
      "21 de Julho de 2011",
      "1 de Setembro de 2011",
      "15 de Julho de 2011",
    ],
    correta: 2,
  },
];

let app = {
  start: function () {
    this.Atualpos = 0;
    this.score = localStorage.getItem("score");
    this.Totalpontos = this.score;
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
    if (this.Totalpontos === 18) {
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
    location.href = "final.html";
  }
  // location.href = "index.html"; // Pode redirecionar para outra página ou reiniciar o quiz
});

app.start();
