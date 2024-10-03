const btn = document.getElementsByTagName('main')[0]; // Obtenha o primeiro elemento <main>
const jsConfetti = new JSConfetti();
const parabens = document.getElementById('parabens');

const estilosParabens = [
    { opacity: '0' },
    { opacity: '1' }
];

let indiceAtual = 0;

// Adiciona o evento de clique ao elemento <main>
btn.addEventListener('click', () => {
    jsConfetti.addConfetti();
});

// Função que alterna a opacidade do "parabéns"
const alternarOpacidade = () => {
    parabens.style.opacity = estilosParabens[indiceAtual].opacity;
    indiceAtual = (indiceAtual + 1) % estilosParabens.length; // Ciclo através dos estilos
};

// Inicia a animação de confete e a opacidade ao carregar a página
window.onload = () => {
    jsConfetti.addConfetti();
    setInterval(alternarOpacidade, 300);
};
