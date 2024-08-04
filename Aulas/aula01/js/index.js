let http = require('http')
const port = 5000

const produtos = [
    {nome: 'Bolo de Morango', valor: 50, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYePBpwDeuRD_mpzGEvRi_kZa0LfLHYukrg&s'},
    {nome: 'Bolo de Chocolate', valor:90, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYePBpwDeuRD_mpzGEvRi_kZa0LfLHYukrg&s'},
]

const requestHandLer = (requisicao, resposta) => {
    resposta.setHeader('Access-Control-Allow-Origin', '*')
    resposta.write(JSON.stringify(produtos))
    return resposta.end()
}

const server = http.createServer(requestHandLer)

server.listen(port, () => {
    console.log('Servidor rodando na porta 5000')
})