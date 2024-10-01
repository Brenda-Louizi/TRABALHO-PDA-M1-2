//Peguei os dois botões do html
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let botaoAtual = 0;
const imagens = document.querySelectorAll('.imagem')

btnAvancar.addEventListener("click", function()) {
    const ehUltimoCartao = botaoAtual === imagens.length - 1
    if (ehUltimoCartao) return;
    esconderCartaoSelecionado()

    botaoAtual++
    mostrarCartao()
}

function mostrarCartao() {
    imagens[botaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".esconder");
    cartaoSelecionado.classList.remove("esconder");
}