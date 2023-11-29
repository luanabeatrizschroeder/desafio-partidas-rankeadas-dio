let resultado = ranking(100, 1)
let nivel = ''

function ranking (vitorias, derrotas) {
    return vitorias - derrotas
}

if (resultado < 10) {
    nivel = 'Ferro'
} else if (resultado < 20) {
    nivel = 'Bronze'
} else if (resultado < 50) {
    nivel = 'Prata'
} else if (resultado < 80) {
    nivel = 'Ouro'
} else if (resultado < 90) {
    nivel = 'Diamante'
} else if (resultado < 100) {
    nivel = 'Lendário'
} else if (resultado >= 101) {
    nivel = 'Imortal'
}

console.log (`O Herói tem saldo de ${resultado} e está no nível de ${nivel}`)