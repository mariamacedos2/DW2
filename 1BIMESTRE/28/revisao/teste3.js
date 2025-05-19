const numeros = [10, 5, 8, 1, 7];
let resultado = numeros.sort((a,b) => b - a);
resultado = resultado.map(num => num * 3);
resultado = resultado.filter(num => num % 2 === 0);
console.log(resultado);

//Remove o primeiro elemento do array
//Retorna o elemento removido
let frutas = ['maçã', 'banana', 'laranja'];
let primeira = frutas.shift();
console.log(primeira); // 'maçã'
console.log(frutas);   // ['banana', 'laranja']

//Adiciona um ou mais elementos no início do array
let frutas1 = ['banana', 'laranja'];
frutas1.unshift('maçã');
console.log(frutas1); // ['maçã', 'banana', 'laranja']


//Remove o último elemento do array
//Retorna o elemento removido
let frutas2 = ['maçã', 'banana', 'laranja'];
let ultima = frutas2.pop();
console.log(ultima); // 'laranja'
console.log(frutas2); // ['maçã', 'banana']



