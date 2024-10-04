const btn = document.getElementsByTagName('main')[0]; 
const jsConfetti = new JSConfetti();
const parabens = document.getElementById('parabens');

const estilosParabens = [
    { opacity: '0' },
    { opacity: '1' }
];

let indiceAtual = 0;


btn.addEventListener('click', () => {
    jsConfetti.addConfetti();
});


const alternarOpacidade = () => {
    parabens.style.opacity = estilosParabens[indiceAtual].opacity;
    indiceAtual = (indiceAtual + 1) % estilosParabens.length; 
}

window.onload = () => {
    jsConfetti.addConfetti();
    setInterval(alternarOpacidade, 300);
};
