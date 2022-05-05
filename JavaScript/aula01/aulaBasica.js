var x = 0;

// Variavel = significa que o valor podemos atribuir outro valor do que foi definido no inicio . 

var preco = 2
var desconto = 0.2

preco = preco - desconto 

console.log(preco)

// const significa que o valor definido não pode ser alterado no demorer do codigo. Boas práticas escrever em letras maiusculas. 

const  PRECOPRODUTO = 2
var desconto = 0.3 
var total = PRECOPRODUTO - desconto

console.log(total)

// função - dei o nome da função de soma, entre () está os atributos e no final chamei a função e passei o valor dos atributos. 

function soma (a, b){
    return a + b; 
}

soma (3,5);

function escopoLocal() {

	let escopoLocalInterno = "local";

}

console.log(escopoLocalInterno);