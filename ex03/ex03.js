
var num1   = prompt('Informe o primeiro número:')
var num2   = prompt('Informe o segundo número:')

var resultadoOperacao = 0;

var escolha = prompt('Escolha a operação: 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão');

switch (escolha) {
    case '1':
        escolha = '+';
        resultadoOperacao = parseInt(num1) + parseInt(num2);
        console.log(resultadoOperacao);
        break;

    case '2':
        escolha = '-';
        resultadoOperacao = parseInt(num1) - parseInt(num2);
        console.log(resultadoOperacao);
        break;
    case '3':
        escolha = '*';
        resultadoOperacao = parseInt(num1) * parseInt(num2);
        console.log(resultadoOperacao);
        break 
    case '4':
        escolha = '/';
        resultadoOperacao = parseInt(num1) / parseInt(num2);
        console.log(resultadoOperacao)
}