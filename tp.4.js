let valorInicial = 1000
let investimento  =  [100, 32.4, -55.9, -12.1, 27.4, -48.5, -25.3, 12.4, 3.7]

function soma (acc, atual) { 
    return acc + atual
}

let total = investimento.reduce(soma, valorInicial)
console.log(total)

