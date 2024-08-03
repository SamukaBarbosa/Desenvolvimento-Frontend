let express = require('express')
let app = express()
let porta = 5000

let produtos = [
    {
        nome: "Bolu de murangu",
        valor: 10000,
        descricao: "Hmmmmm bolu de murangu melhor bolo do mundo"
    },
    {
        nome: "Bolo de chocolate",
        valor: 200,
        descricao: "Hmmmmmm bolo topppp"
    },
    {
        nome: "Bolo de cenoura",
        valor: 300,
        descricao: "Hmmmmmm bolo topppp"
    }
]

app.get('/', (requisicao, resposta) => {
    try {
        return resposta.json({produtos}).status(200)
    } catch (error) {
        return resposta.json({message: "Operação inválida"}).status(400)
    }
})

app.get('/jogos', (requisicao, resposta) => {
    return resposta.send({nomeJogo: 'Dark souls', nota: 1000000})
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})