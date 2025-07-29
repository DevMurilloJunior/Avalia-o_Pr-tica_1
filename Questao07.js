//7. Menor Número da lista
let listaDeNumeros = [1, 4, 2, 14, 10, 7, 6];
let maior = listaDeNumeros[0]

for(let numeros of listaDeNumeros) {
    if(numeros > maior){
       maior = numeros; 
    }
}
console.log('----------------------------');
console.log(`O maior numero foi: ${maior}`);
console.log('----------------------------');