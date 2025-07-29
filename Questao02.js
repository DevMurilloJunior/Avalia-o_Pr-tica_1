//2.Sistema de Pontos de Fidelidade 
let categoria = 'Ouro'; // 'Ouro', 'Prata', 'Bronze'
let pontos = 0;

switch(categoria) {
    case 'Ouro':
        pontos = 20;
        break
    case 'Prata':
        pontos = 15;
        break
    case 'Bronze':
        pontos = 10;
        break
    default:
        console.log('Categoria inválida');
}

console.log(`
    ----------------------
    Categoria ${categoria}
    PONTUAÇÂO: ${pontos}
    ----------------------
    `);