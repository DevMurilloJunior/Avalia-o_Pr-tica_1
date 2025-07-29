//3.Sequência de Fibonacci
let Fibonacci = [0, 1];

for(cont = 2; cont < 10; cont ++) {
    Fibonacci[cont] = Fibonacci[cont-1] + Fibonacci[cont-2];
}
console.log(Fibonacci);
