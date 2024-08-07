let express = require('express')
let app = express()
let porta = 5000

let produtos = [
    {
        nome: "Bolu de murangu",
        valor: 10000,
        descricao: "Hmmmmm bolu de murangu melhor bolo do mundo",
        imagem: "https://ofner.vtexassets.com/arquivos/ids/157361-800-450?v=638168270663900000&width=800&height=450&aspect=true"
    },
    {
        nome: "Bolo de chocolate",
        valor: 200,
        descricao: "Hmmmm bolo tooooop D+++++",
        imagem: "https://moinhoglobo.com.br/wp-content/uploads/2019/03/08-bolo-chocolate.png"
    },
    {
        nome: "Bolo de cenoura",
        valor: 300,
        descricao: "Hmmmmm bolo tooop muito bom",
        imagem: "https://bolosparavender.com/wp-content/uploads/2019/11/bolo-de-cenoura-cremoso-com-leite-condensado.jpg"
    }
]

app.get('/', (requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    } catch (error) {
        return resposta.json({message: "Operação inválida"}).status(400)
    }
})

app.get('/produto', (requisicao, resposta) => {
    const nomeProduto = requisicao.query.nome.toLowerCase;
    const produtoEncontrado = produtos[nomeProduto];

    if (produtoEncontrado) {
        resposta.json(produtoEncontrado);
    } else {
        resposta.json({
            nome: "Bolu de morangu",
            valor: 100000,
            descricao: "Hmmmmm bolu de murangu",
            imagem: "https://ofner.vtexassets.com/arquivos/ids/157361-800-450?v=638168270663900000&width=800&height=450&aspect=true"
        })
    }
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
})