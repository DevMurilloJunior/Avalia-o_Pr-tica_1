//1.Cálculo de Desconto Progressivo
let valorCompra = 1000;
let desconto = 0;

if(valorCompra >= 1000) {
    desconto = valorCompra - (valorCompra * (20/100));
} else if(valorCompra >= 500 && valorCompra < 1000) {
    desconto = valorCompra - (valorCompra * (10/100));
} else {
    esconto = valorCompra
    console.log('---------------------')
    console.log('Não haverá desconto');
}

console.log('---------------------');
console.log(`VALOR FINAL: R$ ${desconto}`);
console.log('---------------------');