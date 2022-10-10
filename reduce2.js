const alunos = [
    {nome: 'maria', nota: 9.8, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'maria', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 8.0, bolsista: false}
]

// todos são bolsistas
 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// tem lagum bolsista

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
