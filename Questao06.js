//6.Verificador de Aprvação Escolar 
let n1 = 6;
let n2 = 9;
let n3 = 8;
let n4 = 8;
let frequencia = 60;
let media = (n1 + n2 + n3 + n4)/4

console.log('-------------------')
console.log(`Media final: ${media}`)
console.log(`Frequencia: ${frequencia}%`)
console.log('-------------------')
if(media >= 6 && frequencia >= 75) {
    console.log('APROVADO!');
} else {
    console.log('REPROVADO!');
}
console.log('-------------------')
