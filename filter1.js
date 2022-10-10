const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 4500, fragil: true},
    {nome: 'Copo De Vidro', preco: 13.99, fragil: true},
    {nome: 'Copo De Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
