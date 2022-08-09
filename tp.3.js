const investimento = [{ mes: 1, saldo: 100 }, { mes: 2, saldo: 32.4 }, {mes: 3, saldo: 55.9}, {mes: 4, saldo: -12.1}, {mes: 5, saldo: 27.4}, {mes: 6, saldo: -48.5}, {mes: 7, saldo: -25.3}, {mes: 8, saldo: 12.4}, {mes: 9, saldo: 3.7}]
const investimentoPositivo = [100, 32.4, 27.4,12.4, 3.7]
const investimentoNegativo =  [-55.9, -12.1, -48.5, -25.3]
const investimento_positivo = []
const investimento_negativo = []
var totalNegativo = 0;
var totalPositivo = 0;




    //1.imperativo
    for(let x = 0; x < investimento.length; x++) {
        if(investimento[x].saldo > 0) {
            investimento_positivo.push(investimento[x])
            
        }
       
    }

    console.log("Esse é o 1.imperativo");
    console.log(investimento_positivo);

    
    
    //1.funcional
        const separarPositivos = invest => (invest.saldo>0)
        const investimento_pstv = investimento.filter(separarPositivos)
            console.log("Esse é o 1.funcional");
            console.log(investimento_pstv);



        
    // 2.imperativo
        for(let x = 0; x < investimento.length; x++) {
            if(investimento[x].saldo > 0) {
            investimento_negativo.push(investimento[x])
            
            }

       }

    console.log("Esse é o 2.imperativo");
    console.log(investimento_negativo);

        
    
    
    
    // 2.funcional
        const separarNegativos = invest => (invest.saldo<0)
        const investimento_ngtv = investimento.filter(separarNegativos)
        console.log("Esse é o 2.funcional");
        console.log(investimento_ngtv)
    



    // 3.imperativo
        const positivo = []
        for(let i = 0; i < investimento.length; i++) {
            if(investimento[i].saldo > 0) {
               positivo[i] = investimento[i].saldo
            }
        
        }
        console.log("Esse é o 3.imperativo");
        console.log(positivo);



        // 3.funcional
        const filterPositiv = investimento => (investimento.saldo > 0)
        const positiv = investimento.map(filterPositiv)
        console.log("Esse é o 3.funcional");
        console.log(positiv)




        // 4.imperativo

        const negativo = []
        for(let i = 0; i < investimento.length; i++) {
            if(investimento[i].saldo < 0) {
                negativo[i] = investimento[i].saldo
            

             }
            

        }
        console.log("Esse é o 4.imperativo");
        console.log(negativo)


        // 4.funcional

        const filterNegativos = investimento => (investimento.saldo<0)
        const negativ = investimento.map(filterNegativos)
        console.log("Esse é o 4.funcional");
        console.log(negativ)



        // 5.Imperativo

        for(let x=0; x <negativo.length; x++) {
            totalNegativo = 0
     }

         console.log("Esse é o 5.Imperativo");
        console.log(totalNegativo)


        // 5.funcional

        const valorInicial = 0
        function soma(acumulado, novo) {
            return acumulado = acumulado + novo
        }

        const totalNegativ = negativo.reduce(soma, valorInicial)
        console.log("Esse é o 5.funcional")
        console.log(totalNegativ)


    


        // 6.funcional

        function soma(acumulado, novo){
            return acumulado = acumulado + novo 
}
        const totalPositiv =  positivo.reduce(soma, valorInicial)   
        console.log("Esse é o ponto 6.funcional")
        console.log(totalPositiv)

        

        // 7

        total = totalNegativ + totalPositiv

        console.log("total:")
        console.log(total)




        
