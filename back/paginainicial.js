let nameUser = prompt("Insira seu nome")
while(nameUser === "" || nameUser.length < 3 ){ 
nameUser = prompt ("Digite o nome para  progredir ao jogo, no mínimo três caracteres")
} 
alert (`Seja bem-vindo ao nosso mundo ${nameUser}, bom jogo!`)

function clicar() {
    const mapaDiv = document.getElementById('mapa');
    if (mapaDiv.style.display === 'none') {
        mapaDiv.style.display = 'block'; // Ou 'flex', dependendo do que você deseja
    } else {
        mapaDiv.style.display = 'none';
    }
}

