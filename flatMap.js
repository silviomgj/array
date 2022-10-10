const escola = [{
    nome: 'turma m1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'Adriana',
        nota: 9.3
    }]
},{
    nome: 'turma m2',
    alunos: [{
        nome: 'Fred',
        nota: 8.9
    }, {
        nome: 'Rebeca',
        nota: 7.3
    }]
}]

const getNotasAlunos = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasAlunos)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
