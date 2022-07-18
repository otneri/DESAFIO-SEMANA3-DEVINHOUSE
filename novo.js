// var idade = 79
// if (idade >= 18 && idade < 65) {
//     console.log('Voto obrigatório.')
// } if (idade < 18) {
//     console.log ('Não pode votar.')
// } else {if (idade > 65) {
//     console.log('Voto facultativo.')
// } } 

// var agora = new Date()
// var diaSemana = agora.getDay();
// diaSemana= 10
// switch (diaSemana) { 
//     case 1 :
//         console.log ('Segunda-Feira')
//     break;

//     case 2 :
//         console.log ('Terça-Feira')
//     break;

//     case 3 :
//         console.log ('Quarta-Feira')
//     break
    
//     case 4 :
//         console.log ('Quinta-Feira') 
//     break

//     case 5 :
//         console.log ('Sexta-Feira')
//     break

//     case 6 :
//         console.log ('Sábado');
//     case 7 :
//         console.log ('Domingo');
//     break
//     default :
//         console.log("Erro!") 
// }


// while (fatias > 0) {
//     console.log('Comer fatia.')
//     fatias -= 1
// }; 
// console.log('Acabou a pizza.')
// var fatias = 3
// for ( fatias , fatias > 0 ,  fatias -- ) {
//     console.log ('Comer fatia.')

// }
    

var num= [3,5,8,1,94,1029,12.2]

num.push(40.5)
num.sort()
// for (var pos = 0; pos < num.length; pos ++) {
//     console.log(num[pos]);
// }

// for (var pos in num) {
//     console.log (num[pos])
// }

function parimp (numero) {
    for (var pos=0 ;pos < num.length; pos ++) {
        if (num % 2 === 0) {
            return 'par';
        } else {
            return 'impar';
        }
    }
}

var res = parimp(num);
console.log(res) 

/*function fatorial (n) {
    var fat = 1
    for (var c = n; c > 1; c -- ) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))*/

