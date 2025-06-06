'use strict'

export async function getJogos() {
    try {
        const url = `http://localhost:8080/v1/controle-jogos/jogo`
        const response = await fetch(url)
        const data = await response.json()
        return data.data 
    } catch (erro) {
        console.error('Erro ao buscar jogos:', erro)
        return []
    }
}



export async function getJogoPorId(id) {
    try {
        const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
        const response = await fetch(url)
        const data = await response.json()
        return [data.data] 
    } catch (erro) {
        console.error(`Erro ao buscar jogo com ID ${id}:`, erro)
        return []
    }
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