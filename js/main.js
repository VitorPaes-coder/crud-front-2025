'use strict'

import { getJogos, getJogoPorId } from "./jogo.js"

async function criarCard(jogo){
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-jogo')
    card.innerHTML = `
                        <img src="${jogo.foto}" alt="foto do contato">
                        <h2>${jogo.nome}</h2>
                        <p>${jogo.celular}</p>
    `
    container.appendChild(card)
}

async function exibirJogos(){
    const jogos = getJogos()
    jogos.forEach(criarCard)
}

async function exibirPesquisa(evento) {
    const container = document.getElementById('container')
    if (evento.key == 'Enter') {
        const jogos = await getContatosPorNome(evento.target.value)
        container.replaceChildren('')
        contatos.forEach(criarCard)
    }
}

document.getElementById('pesquisar').addEventListener('keydown', exibirPesquisa)

exibirJogos()