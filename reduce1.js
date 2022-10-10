const alunos = [
    {nome: 'maria', nota: 9.8, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'maria', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 8.0, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0.7)

console.log(resultado)
