const investimento = [100, 32.4,-55.9, -12.1, 27.4, -48.5, -25.3,12.4, 3.7]


//funcional
const investimento_positivo = investimento.filter(function(i){
    return i > 0;
  }, investimento);
  
  const investimento_negativo = investimento.filter(function(i){
    return i < 0;
  }, investimento);



  const positivo = investimento.filter(function(i){
    return i > 0;
  }, investimento);
  
  const negativo = investimento.filter(function(i){
    return i < 0;
  }, investimento);






  function soma (acc,atual) {
      return acc + atual
  }

  const total = investimento.reduce(soma)
  console.log(total)


  console.log(investimento_positivo)
  console.log(investimento_negativo)
  console.log(positivo);
  console.log(negativo);





















