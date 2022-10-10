const pilotos = ['Vettel', 'Alonso', 'Rikkonen', 'Massa']
pilotos.pop()    //remove o último elemento
console.log(pilotos)

pilotos.push('Vertappen')  //  adiciona o ultimo elemento 
console.log(pilotos)

pilotos.shift()   // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento 
console.log(pilotos)


// Splice, adicionar ou remover elementos
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1,)
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)
