'use strict'

import { getJogos, getJogoPorId } from "./jogo.js"

async function criarCard(jogo) {
    try {
        const container = document.getElementById('container')
        const card = document.createElement('div')
        card.classList.add('card-jogo')
        card.innerHTML = `
                            <h2>${jogo.nome}</h2>
                            <p>${jogo.descricao}</p>
        `
        container.appendChild(card)
    } catch (erro) {
        console.error('Erro ao criar card:', erro)
    }
}

async function exibirJogos() {
    try {
        const jogos = await getJogos()
        jogos.forEach(criarCard)
    } catch (erro) {
        console.error('Erro ao exibir jogos:', erro)
    }
}

async function exibirPesquisa(evento) {
    try {
        const container = document.getElementById('container')
        if (evento.key == 'Enter') {
            const jogos = await getJogoPorId(evento.target.value)
            container.replaceChildren() 
            jogos.forEach(criarCard)
        }
    } catch (erro) {
        console.error('Erro na pesquisa:', erro)
    }
}

exibirJogos()

document.getElementById('pesquisar').addEventListener('keydown', exibirPesquisa)

/**
async function cadastroJogo(){
    document.querySelector('main').className = 'form-show'
}

async function abrirHome(){
    document.querySelector('main').className = 'card-show'
}
**/