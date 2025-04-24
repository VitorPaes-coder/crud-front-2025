'use strict'

export async function getContatos(){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getContatosPorNome(nome){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/?nome_like=^${nome}`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

async function getContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch (url)
    const data = await response.json()
    console.log(data);
    return data
}

async function postContato(contato){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)
    return response.ok
}

const novoContato = {
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
