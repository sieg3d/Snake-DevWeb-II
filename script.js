var tamanho = 25
var linhas = 20
var colunas = 20
var fundo
var conteudo
var cobraX = Math.floor(colunas/2) * tamanho
var cobraY = Math.floor(colunas/2) * tamanho
var velocidadeX = 0
var velocidadeY = 0
var cobra = []
var macaX
var macaY
var fim = false
var pontos = -1
var maca = new Image()
maca.src = "maca.png"

function reiniciarJogo() {
    fim = false
    pontos = -1
    cobraX = Math.floor(colunas/2) * tamanho
    cobraY = Math.floor(colunas/2) * tamanho
    velocidadeX = 0
    velocidadeY = 0
    cobra = []
    comida()
}


window.onload = function () {
    fundo = document.getElementById("tela")
    fundo.width = colunas * tamanho
    fundo.height = linhas * tamanho
    conteudo = fundo.getContext("2d")

    comida()

    document.addEventListener("keyup", direcao)
    setInterval(atualiza, 1000 / 10)
}




function atualiza() {
    if (fim) {
        return
    }

    conteudo.fillStyle = "black"
    conteudo.fillRect(0, 0, fundo.width, fundo.height)

    conteudo.fillStyle = "red"
    conteudo.drawImage(maca, macaX, macaY, tamanho, tamanho)

    if (cobraX === macaX && cobraY === macaY) {
        cobra.push([macaX, macaY])
        comida()
    }

    for (let i = cobra.length - 1; i > 0; i--) {
        cobra[i] = cobra[i - 1]
    }
    if (cobra.length) {
        cobra[0] = [cobraX, cobraY]
    }

    conteudo.fillStyle = "blue"
    cobraX += velocidadeX * tamanho
    cobraY += velocidadeY * tamanho
    conteudo.fillRect(cobraX, cobraY, tamanho, tamanho)
    for (let i = 0; i < cobra.length; i++) {
        conteudo.fillRect(cobra[i][0], cobra[i][1], tamanho, tamanho)
    }
    if (cobraX < 0 || cobraX >= colunas * tamanho || cobraY < 0 || cobraY >= linhas * tamanho) {
        fim = true
        alert(`Perdeu, mané!\nFez ${pontos} pontos. Parabens!`)
    }

    for (i = 0; i < cobra.length; i++) {
        if (cobraX === cobra[i][0] && cobraY === cobra[i][1]) {
            fim = true
            alert(`Perdeu, mané!\nFez ${pontos} pontos. Parabens!`)
        }
    }

}

function direcao(evento) {
    if (evento.code === "ArrowUp" && velocidadeY != 1) {
        velocidadeX = 0
        velocidadeY = -1
    } else if (evento.code === "ArrowDown" && velocidadeY != -1) {
        velocidadeX = 0
        velocidadeY = 1
    } else if (evento.code === "ArrowLeft" && velocidadeX != 1) {
        velocidadeX = -1
        velocidadeY = 0
    } else if (evento.code === "ArrowRight" && velocidadeX != -1) {
        velocidadeX = 1
        velocidadeY = 0
    }

}
function comida() {
    maca.onload = function () {
        macaX = Math.floor(Math.random() * colunas) * tamanho
        macaY = Math.floor(Math.random() * linhas) * tamanho
        ++pontos
        console.log(`${pontos}`)
    }
    maca.src = "maca.png"
}

function cima() {
    if (velocidadeY !== 1) {
        velocidadeX = 0
        velocidadeY = -1
    }
}

function baixo() {
    if (velocidadeY !== -1) {
        velocidadeX = 0
        velocidadeY = 1
    }
}

function esquerda() {
    if (velocidadeX !== 1) {
        velocidadeX = -1
        velocidadeY = 0
    }
}

function direita() {
    if (velocidadeX !== -1) {
        velocidadeX = 1
        velocidadeY = 0
    }
}

// o jogo ja começa finalizado. Entender o motivo
// cobra.push([cobraX,cobraY])
// cobra.push([cobraX - tamanho, cobraY])
// cobra.push([cobraX-2 * tamanho, cobraY])