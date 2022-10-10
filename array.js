console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Francielle', 'Cecilia', 'Benjamin')
console.log(aprovados)

aprovados = ['Francielle', 'Cecilia', 'Benjamin']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados [3] = 'Junior'
aprovados.push('Nena')
console.log(aprovados.lenght)

aprovados [9] = 'João'
console.log(aprovados.lenght)
console.log(aprovados [8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Francielle', 'Cecilia', 'Benjamin']
aprovados.splice(1, 0, 'Felipe', 'Fabio')
console.log(aprovados)
