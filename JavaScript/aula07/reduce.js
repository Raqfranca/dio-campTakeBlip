/* Reduce 
    
    1.Some todos os números de um array  
*/

function somaNumeros(arr){
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));


/*
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

const lista = [
    {
        nome: 'sabao em po',
        preco: 30,
    },

    {
        nome: 'Cereal',
        preco: 12,
    },

    {
        nome: 'toalha',
        preco: 30,
    },        
];

const saldoDisponivel = 100;

function calSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({current});
        console.log({prev});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calSaldo(saldoDisponivel, lista));

