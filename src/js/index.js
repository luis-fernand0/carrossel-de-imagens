let btnEsquerdo = document.querySelector(`.seta-esquerda`)
let btnDireito = document.querySelector(`.seta-direita`)
let imagens = document.querySelector(`.carrossel`)
let sobre = document.querySelector(`.sobre-as-imagens`)

let clickCount = 0

btnDireito.addEventListener(`click`, cliqueDireito)
btnDireito.addEventListener(`click`, verificarClique)

btnEsquerdo.addEventListener(`click`, cliqueEsquerdo)

function cliqueEsquerdo() {
    esconderImagem(clickCount)
    clickCount -= 1

    if (clickCount <= 0) {
        btnEsquerdo.classList.add(`opacidade`)
        clickCount = 0
    }
    
    proximaImagem(clickCount)
}

function cliqueDireito() {
    esconderImagem(clickCount)
    clickCount += 1

    if (clickCount === 3) {
        btnDireito.classList.add(`opacidade`)
    }
    btnEsquerdo.classList.remove(`opacidade`)
    btnEsquerdo.addEventListener(`click`, () => {btnDireito.classList.remove(`opacidade`)})

    proximaImagem(clickCount) 

}

function verificarClique() {
    if (clickCount === 3) {
        btnDireito.removeEventListener(`click`, cliqueDireito)
    } else if (clickCount === 2) {
        btnEsquerdo.addEventListener(`click`, () => {
            btnDireito.addEventListener(`click`, cliqueDireito)
        })
    }
}

function esconderImagem(clickCount) {
    imagens.children[clickCount].classList.remove(`ativa`)
    sobre.children[clickCount].classList.remove(`ativa`)
}

function proximaImagem(clickCount) {
    imagens.children[clickCount].classList.add(`ativa`)
    sobre.children[clickCount].classList.add(`ativa`)
}

function addOpacidade() {
    btnEsquerdo.classList.add(`opacidade`)
}