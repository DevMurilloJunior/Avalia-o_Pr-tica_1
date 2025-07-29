//4.Simulador de Bateria 
let nivelBateria = 100;
let tempo = 0;

while(nivelBateria >= 0) {
    if(nivelBateria > 0) {
        console.log(`
            Horas Passadas: ${tempo}Hr
            Bateria: ${nivelBateria}%`);
    } else {
        console.log(`
            Horas Passadas: ${tempo}Hr 
            Bateria esgotada!`);
    }
    tempo ++
    nivelBateria -= 10;
}