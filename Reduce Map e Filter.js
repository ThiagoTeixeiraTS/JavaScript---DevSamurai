var convidados = [];

while (true) {
    var nome = prompt("Digite o nome do convidado ou S para sair!");


    if (nome == "S") {
        break;
    } else {
        var idade = Number(prompt("Digite a idade do convidado"));
        var cpf = prompt("CPF do convidado!");

        convidados.push({ nome: nome, idade: idade, cpf: cpf });
    }

}


// ver se os numeros são maiores que 10

console.log(convidados);


var numeros = [10, 18, 1, 15];
var resultado = [];

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        resultado.push(numeros[i]);
    }
}


console.log(resultado);


//  Recebendo um array e verificando quem tem idade maior que 10. 
var numeros = [10, 18, 1, 15];
//função anonima  
var novosNumeros = numeros.filter(function(item) {
    return (item > 10);
});

console.log(novosNumeros);




//  Recebendo um array e verificando quem começa com determinada letra.
var nome = ["Bruna", "Thiago", "Renato"];

var convidados = nome.filter(function(item) {
    return item.charAt(0) == "R";
});


console.log(convidados);


// Recebendo um Array  e ver se o numero é par ou impar
var numeros = [10, 18, 2, 3, 58, 6, 7, 9, 11, 21, 33];

/*

 // ******   funcao com nome ************
var pares =  function(item){
    return !(item%2);
}

var impares = function(item){
    return item % 2;
}

var numerosPares =  numeros.filter(pares);
var numerosImpares = numeros.filter(impares);


*/



var numerosPares = numeros.filter(function(item) {
    return !(item % 2);
});

var numerosImpares = numeros.filter(function(item) {
    return (item % 2);
});

console.log("numeros pares " + numerosPares);
console.log("Numeros Impares " + numerosImpares);


// array com lista 


var filmes = [
    { titulo: "The Avengers ", duracao: 203, nota: 9.5 },
    { titulo: "Titanic", duracao: 195, nota: 7.5 },
    { titulo: "Bean", duracao: 90, nota: 6.5 }
]

var notaCorte = 8;

var bons = function(item) {
    return item.nota >= notaCorte;
}

var filmesBons = filmes.filter(bons);

var filmesRuins = filmes.filter(function(item) {
    return item.nota < notaCorte;
});

console.log(filmesBons);
console.log(filmesRuins);
console.log(filmesRuins.length);




// Filter com boolean 
var convidados = [
    { nome: "Augusto", vip: true, idade: 1 },
    { nome: "Renato", vip: true, idade: 9 },
    { nome: "Ralf", vip: false, idade: 21 }
];

var vips = convidados.filter(function(item) {
    return item.vip;
});

console.log(vips);


//utilizando  ## MAP 
// dobrando o valor do vetor
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var dobrados = numeros.map(function(item) {
    return item * 2;
});

console.log(dobrados);

//termometro

var fahrenheit = [0, 21, 36, 54, 62, 79, 89, 91, 93, 121];

var celsius = fahrenheit.map(function(item) {
    return Math.round((item - 32) * 5 / 9);
});

console.log(celsius);


// deixando tudo em caixa alta com MAP e to upper case
var convidados = [
    { nome: "augusto", vip: true, idade: 1 },
    { nome: "renato", vip: true, idade: 9 },
    { nome: "RaLf", vip: false, idade: 21 }
];

var convidadosNormalizado = convidados.map(function(item) {



    return Object.assign(item, { nome: item.nome.toUpperCase() });
    //Object.assign(item, ORIGEM);


    //tenho que recriar o obj caso queira fazer esta mudança senão irei perder os outros atributos
    // return { nome: item.nome.toUpperCase(), vip: item.vip, idade: item.idade };
    // com o return acima functionaria mas eu teria problema se alguem mudar adicionar novos atributos em convidados
});


console.log(convidadosNormalizado);




// ## REDUCE