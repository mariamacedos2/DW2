function encontrarMaiorElemento(array) {
    let maior = array[0];
    let posicao = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i];
        posicao = i;
      }
    }
  
    console.log(`Maior elemento: ${maior}`);
    console.log(`Posição: ${posicao}`);
  }

  encontrarMaiorElemento([5, 10, 70, 8]);

function ehmaior(array){
    let maior = array[0];
    let posicao = 0;

    for(let i = 1; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
            posicao = i;
        }
    }

    console.log(`Maior elemento: ${maior}`);
    console.log(`Posição: ${posicao}`)
}

ehmaior([1,3,7,8])





  