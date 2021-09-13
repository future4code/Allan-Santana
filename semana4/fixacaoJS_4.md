```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  
  function numeroQueEstamosProcurando(number){
    return number == numeroEscolhido
  }
  
  let numerosEncontrados = arrayDeNumeros.filter(numeroQueEstamosProcurando)
  
  if (numerosEncontrados.length === 0){
    return "Número não encontrado"
  } else{
    return  `O número ${numeroEscolhido} aparece ${numerosEncontrados.length}x`
  }
}
```