let valorInicial = 1000
const investimento = [{ mes: 1, saldo: 100 }, { mes: 2, saldo: 32.4 }, { mes: 3, saldo: -55.9 }, { mes: 4, saldo: -12.1 }, { mes: 5, saldo: 27.4 }, { mes: 9,
        saldo:  48.5}, { mes: 7, saldo: -25.3}, {mes: 8, saldo: 12.4}, {mes: 9, saldo: 3.7 }]
let totalNegativos = 0

const negativos = investimento.filter(number => number < 0 );

console.log(negativos.length);








