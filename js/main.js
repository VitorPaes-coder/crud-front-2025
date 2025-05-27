'use strict'

import { getJogos, getJogoPorId } from "./jogo.js";
import { uploadImageToAzure } from "./uploadImageToAzure.js"; // Corrigido para importar do arquivo correto

async function handleUploadImage() {
    const uploadParams = {
        file: document.getElementById('foto').files[0],
        storageAccount: 'gameupload',
        sasToken: 'sp=racwl&st=2025-05-15T12:37:56Z&se=2025-05-15T20:37:56Z&sv=2024-11-04&sr=c&sig=wanMeSo%2BKYkQWH9dXSMFYCVij0RQIGJdJQ8VL%2F%2Bbw8w%3D',
        containerName: 'fotos',
    };

    await uploadImageToAzure(uploadParams);
}


async function criarCard(jogo) {
    try {
        const container = document.getElementById('container')
        const card = document.createElement('div')
        card.classList.add('card-jogo')
        card.innerHTML = `
                            <img src="${jogo.foto_capa}" alt="${jogo.nome}">
                            <h2>${jogo.nome}</h2>
                            <p>${jogo.descricao}</p>
                            <div></div>
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