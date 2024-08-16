
var teclas = document.querySelectorAll(".tecla")

function tocaSom(idAudio) {
    document.querySelector(idAudio).play()
}


for (contador = 0; contador < teclas.length; contador ++) {
    
    const tecla = teclas[contador];
    
    const instrumento = tecla.classList[1]
    
    //template string;
    const idAudio = `#som_${instrumento}`


    //função anonima serve para armezenar referencias variáveis ou constantes.
    teclas[contador].onclick = function () {
    
    tocaSom(idAudio);
    
        tecla.onkeydown = function (evento) {
            console.log(evento)
        }
 
    }

    teclas.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    
    
    }

    teclas.onkeyup = function () {
        tecla.classList.remove("ativa")
    }
    
}






