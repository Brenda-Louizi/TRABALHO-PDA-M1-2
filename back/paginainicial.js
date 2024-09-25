function clicar() {
    const mapaDiv = document.getElementById('mapa');
    if (mapaDiv.style.display === 'none') {
        mapaDiv.style.display = 'block'; // Ou 'flex', dependendo do que você deseja
    } else {
        mapaDiv.style.display = 'none';
    }
}

