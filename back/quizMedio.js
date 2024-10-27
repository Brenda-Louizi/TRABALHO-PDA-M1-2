var body = document.body;


body.style.backgroundImage = "url('../assets/images/background-medio.gif')";


body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";

var perguntas = document.querySelector(".perguntas");
perguntas.style.backgroundColor = "rgba(207, 207, 51, 1)";

var buttons = document.querySelectorAll(".respostas button");

buttons.forEach(function (button) {
  button.style.backgroundColor = "rgba(224, 221, 36, 0.694)"; 

  button.addEventListener("mouseover", function () {
    this.style.backgroundColor = "rgba(224, 142, 36, 0.694)";
  });

  button.addEventListener("mouseout", function () {
    this.style.backgroundColor = "rgba(224, 221, 36, 0.694)"; 
  });
});
var pagina = 0;
let pergunta = [
  {
    titulo: "Como Kratos perde sua divindide??",
    alternativa: [
      "Na luta contra Ares.",
      "Lutando contra as Moiras.",
      "Colocando-a na espada de Zeus.",
      "No mundo dos mortos.",
    ],
    correta: 2, 
  },
  {
    titulo:
      "Qual é o nome do primeiro chefe que os jogadores geralmente enfrentam em Terraria?",
    alternativa: [
      "King Slime ",
      "Eye of Cthulhu.",
      "Skeletron.",
      "Wall of Flesh.",
    ],
    correta: 1,
  },
  {
    titulo:
      "Média em qual versão de mortal Kombat, o Baraka teve sua primeira aparição?",
    alternativa: [
      "Mortal Kombat II.",
      "Mortal Kombat III.",
      "Mortal Kombat XI.",
      "Baraka está em todas as versões.",
    ],
    correta: 0,
  },
  {
    titulo:
      "Qual o nome da área do mapa que era conhecida por suas grandes construções em Fortnite Capítulo 1?",
    alternativa: [
      " Torres Tortas.",
      "Alameda Arborizada.",
      "Parque Agradável.",
      "Via do Varejo.",
    ],
    correta: 0,
  },
  {
    titulo:
      "Qual super herói aparece quando coloca o Código Secreto no jogo Tony halk pro skater 2?",
    alternativa: [
      "Batman.",
      "Super homem.",
      "Homem aranha.",
      "Capitão América.",
    ],
    correta: 2,
  },
  {
    titulo: "Qual é o mob que ganhou a votação de 2023?",
    alternativa: ["Allay.", "Tatu.", "Carangueijo.", "Enderman."],
    correta: 1,
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
    
    document.getElementById("nextButton").style.display = "none";
    this.atualizaPontos();
    app.mostraQuestao(pergunta[this.Atualpos]);
  },

  mostraQuestao: function (q) {
    this.qatual = q;
    
    let titleDiv = document.getElementById("titulo");
    titleDiv.textContent = q.titulo;
    
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
    
    if (this.Totalpontos === 12) {
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
    location.href = "../index.html";
  },
};


document.getElementById("nextButton").addEventListener("click", function () {
  if (pagina === 1) {
    location.href = "quiz3.html";
  }
  
});

app.start();
