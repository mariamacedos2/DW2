function encontrarmaior(arr){
    let maior = arr[0];
    let pos = 0;

    for(let i=1; i < arr.length; i++){
        if(maior < arr[i]){
            maior = arr[i];
            pos = i;
        }
    }

    console.log(`Maior: ${maior}\nPosição: ${pos}`);
}

encontrarmaior([12,5,7,8]);
