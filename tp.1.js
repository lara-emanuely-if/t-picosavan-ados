 let notas = [8, 7, 4, 3, 9]
 let aprovados = []


 /*
 //IMPERATIVA

 for (let x = 0; x < notas.length; x++) {
    if (notas[x] >= 6)
        aprovados.push(notas[x])
 }

 console.log(aprovados)

*/


//DECLARATIVO

/*

function isAprovadoa(notas){
    if (notas >=6)
    return true
}

}

let aprovados = notas.filter(isAprovados)
console.log(aprovados)

*/



// resumo - declarativo

let isAprovados = nota => nota >=6
let aprovado = notas.filter(isAprovados)
console.log(aprovado)

