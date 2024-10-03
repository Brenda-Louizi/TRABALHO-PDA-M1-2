let senhaSlide = 0;
mostrarSlides(senhaSlide);

function mudarSlide(n) {
    mostrarSlides(senhaSlide += n);
}

function mostrarSlides(n) {
    const imagens = document.getElementsByClassName('imagem');

    // Reseta a contagem dos slides
    if (n >= imagens.length) senhaSlide = 0;
    if (n < 0) senhaSlide = imagens.length - 1;

    // Esconde todas as imagens
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.display = 'none';
    }

    // Mostra a imagem atual
    imagens[senhaSlide].style.display = 'block';
}

function isMobileDevice() {
    return window.matchMedia("(max-width: 768px)").matches;
}

function checkOrientation() {
    if (isMobileDevice()) {
        if (window.innerWidth > window.innerHeight) {
            document.querySelector('.carrosel').style.display = 'block';
        } else {
            document.querySelector('.carrosel').style.display = 'none';
            alert("Por favor, gire o dispositivo para a orientação paisagem para visualizar os créditos.");
        }
    } else {
        document.querySelector('.carrosel').style.display = 'block';
    }
}

// Adiciona os eventos de load e resize para verificar a orientação
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);

// Adiciona eventos de clique aos botões
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

btnAvancar.addEventListener("click", function() {
    mudarSlide(1);
});

btnVoltar.addEventListener("click", function() {
    mudarSlide(-1);
});
