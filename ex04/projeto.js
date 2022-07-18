
// parte 1 
var pessoa1 = 
    { nome: "José", sobrenome: "Carlos" , setor: "arquibancada", idade : 34 }
;
var pessoa2 = 
    { nome: "Alessandro", sobrenome: "Viana" , setor: "pista", idade : 16};


var pessoa3 = 
    { nome: "Paula", sobrenome: "Souza" , setor: "camarote", idade : 19};

var pessoa4 = 
    { nome: "Cristian", sobrenome: "Schimit", setor: "arquibancada", idade : 42 };

var pessoa5 = 
    { nome: "Beatriz", sobrenome: "Viana" , setor: "pista", idade : 54 };

var pessoa6 = 
    { nome: "Fernanda", sobrenome: "Silveira" , setor: "camarote", idade : 26 }

// ex 04-05 



// ex 06

const lista = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6]; 


const liberarBebidas = (lista) => {
  const listaProcessada = [];

  lista.forEach((pessoa) => {
    if (pessoa.idade >= 18) {
      listaProcessada.push({ ...pessoa, openBar: true });
    } else {
      listaProcessada.push({ ...pessoa, openBar: false });
    }
  });

  return listaProcessada;

};

var novaLista = liberarBebidas(lista)
console.log(novaLista)

// ex 07
// um exemplo com a função de camarote...
// var listaCamarote = separarCamarote(convidadosComBebidasProcessada);
// function fazerUmFiltro(umaListaDeObjetos) {
//     var listaFiltrada = umaListaDeObjetos.filter((objeto) => objeto.propriedade === "valor");
//       return listaFiltrada;

function separarCamarote(lista) {
    var camarote = lista.filter((lista) => lista.setor === "camarote") ;
    return camarote;
}

var camarote = separarCamarote(novaLista);


function separarPista(lista) {
    var pista = lista.filter((lista) => lista.setor === "pista") ;
    return pista;
}
var pista = separarPista(novaLista);



function separarArquibancada(lista) {
    var arquibancada = lista.filter((lista) => lista.setor === "arquibancada") ;
    return arquibancada;
}
var arquibancada = separarArquibancada(novaLista);
console.log (arquibancada)

//ex08

var ulCamarote = document.getElementById('listaCamarote');
var ulArquibancada = document.getElementById('listaArquibancada');
var ulPista = document.getElementById('listaPista');

function montaNome (convidado) {
    return `${convidado.nome} ${convidado.sobrenome}`;

}

arquibancada.forEach((convidado) => {
    ulArquibancada.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

camarote.forEach ((convidado) => {
    ulCamarote.innerHTML += `<li>${montaNome(convidado)}</li>`;
})

pista.forEach ((convidado) => {
    ulPista.innerHTML += `<li>${montaNome(convidado)}</li>`;
}) 


//ex 09

camarote.forEach ((nome) => {
    if (nome.openBar) {
        ulCamarote.innerHTML +=  montaNome(nome) + '🤩';
    }else {
        ulCamarote.innerHTML += montaNome(nome) + '😪';
         
    }
})  
pista.forEach ((nome) => {
    if (nome.openBar) {
        ulPista.innerHTML += montaNome(nome) + '🤩';
    }else {
        ulPista.innerHTML += montaNome(nome) + '😪';
         
    }
})  

arquibancada.forEach ((nome) => {
    if (nome.openBar) {
        ulArquibancada.innerHTML +=  montaNome(nome) + '🤩';
    }else {
        ulArquibancada.innerHTML += montaNome(nome) + '😪';
         
    }
})  

