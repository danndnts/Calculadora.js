let numero1 = 3;
let operador = '+';
let numero2 = 5;

let adicao;
let subtracao;
let multiplicacao;
let divisao;

switch (operador) {
    case '+':
        adicao = numero1 + numero2
        console.log('A soma é:', adicao);
        break;
    case '-':
        subtracao = numero1 - numero2
        console.log('A subtracão é', subtracao);
        break;
    case '*':
        multiplicacao = numero1 * numero2
        console.log('A multiplicacão é', multiplicacao);
        break;
    case '/':
        if (numero2 === 0){
            console.log('Não pode ser divido');
        }else{
            divisao = numero1 / numero2	
            console.log('Á divisão é', divisao)
        }
        break;
    default:
        console.log('Operador inválido')
}
