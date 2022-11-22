 const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach((elemento)=> {
    elemento.addEventListener('click', (e)=> {

        const somDoBotao = elemento.classList[1];
        const idElemento = `#som_${somDoBotao}`;

        somDoAudio(idElemento);
    });
    function somDoAudio(idAudio) {
        document.querySelector(idAudio).play();
    }
});



