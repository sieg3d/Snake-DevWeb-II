var tamanho = 25
var linhas = 20
var colunas = 20
var fundo
var conteudo
var cobraX = tamanho * 5
var cobraY = tamanho * 5
var velocidadeX = 0
var velocidadeY = 0
var cobra = []
var macaX
var macaY
var fim = false

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
    conteudo.fillRect(macaX, macaY, tamanho, tamanho)

    if (cobraX == macaX && cobraY == macaY) {
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
    if (cobraX < 0 || cobraX > colunas * tamanho || cobraY < 0 || cobraY > linhas * tamanho) {
        fim = true
        alert(`Perdeu, mané!`)
    }

    for (i = 0; i < cobra.length; i++) {
        if (cobraX == cobra[i][0] && cobraY == cobra[i][1]) {
            fim = true
            alert(`Perdeu, mané!`)
        }
    }

}

function direcao(x) {
    if (x.code == "ArrowUp" && velocidadeY != 1) {
        velocidadeX = 0
        velocidadeY = -1
    } else if (x.code == "ArrowDown" && velocidadeY != -1) {
        velocidadeX = 0
        velocidadeY = 1
    } else if (x.code == "ArrowLeft" && velocidadeX != 1) {
        velocidadeX = -1
        velocidadeY = 0
    } else if (x.code == "ArrowRight" && velocidadeX != -1) {
        velocidadeX = 1
        velocidadeY = 0
    }

}
function comida() {
    macaX = Math.floor(Math.random() * colunas) * tamanho
    macaY = Math.floor(Math.random() * linhas) * tamanho
}

