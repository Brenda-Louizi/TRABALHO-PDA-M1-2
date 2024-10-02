const btn = document.getElementsByTagName('main');
        const jsConfetti = new JSConfetti();
        const parabens = document.getElementById('parabens')

        const estilosParabens = [{
            opacity: '0'
        },
        {
            opacity: '1'
        }]

        let indiceAtual = 0;

        btn[0].addEventListener('click', () => {
            jsConfetti.addConfetti()
        });

        window.onload = () => {
            jsConfetti.addConfetti()
            setInterval(function () {
                parabens.style.opacity = estilosParabens[indiceAtual].opacity
                indiceAtual = (indiceAtual + 1) % estilosParabens.length
            }, 1500)
        }