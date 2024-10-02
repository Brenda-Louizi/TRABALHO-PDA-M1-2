//Peguei os dois botões do html
// const btnAvancar = document.getElementById('btn-avancar');
// const btnVoltar = document.getElementById('btn-voltar');
// let botaoAtual = 0;
// const imagens = document.querySelectorAll('.imagem')

// btnAvancar.addEventListener("click", function() {
//     const ehUltimoCartao = botaoAtual === imagens.length - 1
//     if (ehUltimoCartao) return;
//     esconderCartaoSelecionado()

//     botaoAtual++
//     mostrarCartao()
// });

// function mostrarCartao() {
//     imagens[botaoAtual].classList.add("selecionado");
// }

// function esconderCartaoSelecionado() {
//     const cartaoSelecionado = document.querySelector(".esconder");
//     cartaoSelecionado.classList.remove("esconder");
// }

let senhaSlide = 0;
mostrarSlides(senhaSlide)

function mudarSlide(n) {
    mostrarSlides(senhaSlide += n);
}

function mostrarSlides(n) {
    const imagens = document.getElementsByClassName('imagem');
    if (n >= imagens.length) senhaSlide = 0;
    if(n < 0) senhaSlide = imagens.length - 1;

    for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.display = 'none';
    }

    imagens[senhaSlide].style.display = 'block';
}