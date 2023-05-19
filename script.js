var tamanho = 25
var linhas = 20
var colunas = 20
var fundo
var conteudo
var cobraX = (tamanho * 5)
var cobraY = (tamanho * 5)
var velocidadeX = 0
var velocidadeY = 0
var cobra = [4]
var macaX
var macaY
var fim = true

window.onload = function () {
    tela = document.getElementById("tela")
    tela.width = colunas * tamanho
    tela.height = linhas * tamanho
    conteudo = tela.getContext("2d")

    comida()
    document.addEventListener("keyup", mudaLocal)
    setInterval(atualiza, 1000 / 10)
}



function atualiza() {
if(fim){
    return
}
}

function mudaLocal(x){
    if(x.code=="cima" && velocidadeY != -1){
        velocidadeX = 0
        velocidadeY = -1
    }else if(x.code=="baixo" && velocidadeY != -1){
        velocidadeX = 0
        velocidadeY = 1
    }else if(x.code=="esquerda" && velocidadeX != 1){
        velocidadeX = -1
        velocidadeY = 0
    }else if(x.code=="esquerda" && velocidadeX != 1){
        velocidadeX = 1
        velocidadeY = 0
    }

}
function comida(){
    macaX = Math.floor(Math.random()*colunas)*tamanho
    macaY = Math.floor(Math.random()*colunas)*tamanho
}