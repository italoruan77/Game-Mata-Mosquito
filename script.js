
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var tempomosquito = 1600


// criando o nivel de dificuldade
var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')

if (dificuldade === 'Facil') {
    tempomosquito = 1600
} else if(dificuldade === 'medio'){
    tempomosquito = 1100
} else if (dificuldade === 'dificil') {
    tempomosquito = 850
}

// Recuperando Tamanho do navegador //

function tamanhotela() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}
tamanhotela()

// cronometro do jogo Inicio
var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000);




// Gerando Posições Aleatórias/Ranôomicas //
function posicaoMosquito() {

    //removendo mosquito e vidas caso já existir inicio
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'gameover.html'
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }

    }



    //removendo mosquito caso já existir Fim

    var posicaoX = Math.floor(Math.random() * largura) - 90 //arredondando os valores 
    var posicaoY = Math.floor(Math.random() * altura) - 90 //arredondando os valores 

    // verificando valores negativos ou zero
    if (posicaoX < 0) {
        posicaoX = 10
    } else {
        posicaoX = posicaoX
    }

    if (posicaoY < 0) {
        posicaoY = 10
    } else {
        posicaoY = posicaoY
    }

    console.log(posicaoX, posicaoY)

    //criando elemento mosquito no Html

    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.gif'
    mosquito.className = tamanhoMosquito() + ' ' + direcaoMosquito()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    // removendo mosquito quando clicado Inicio

    mosquito.onclick = function () {
        this.remove()
    }
    // removendo mosquito quando clicado Fim

    document.body.appendChild(mosquito)

}

// gerando mosquito tamanhos aleatórios

function tamanhoMosquito() {
    var tamanho = Math.floor(Math.random() * 3) // gerando tamanho até 3

    switch (tamanho) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

    }
}


// Gerando Direção do Mosquito esquerda / direita

function direcaoMosquito() {

    var direcao = Math.floor(Math.random() * 2) // gerando direcao até 2

    switch (direcao) {
        case 0:
            return 'direcao-esquerda'

        case 1:
            return 'direcao-direita'

    }
}




