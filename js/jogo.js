'use strict'

export async function getJogos(){
    const url = `http://localhost:8080/v1/controle-jogos/jogo`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getJogoPorId(id){
    const url = `http://localhost:8080/v1/controle-jogos/${id}`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

/** 
async function postJogo(jogo){
    const url = `http://localhost:8080/v1/controle-jogos/`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo)
    }
    const response = await fetch(url, options)
    return response.ok
}


const novoJogo = {
    "nome": "Vitor Paes Rodrigues",
    "celular": "11 40028922",
    "foto": "../img/vitor-paes.png",
    "email": "vitor@gmail.com",
    "endereco": "Av. São Joaquim, 123",
    "cidade": "Caracas City"
}

async function putContato(contato, id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)
    return response.ok
}


async function deleteContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}
**/