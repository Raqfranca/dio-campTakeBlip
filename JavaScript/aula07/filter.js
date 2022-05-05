// Filter - Filtre e retorne todos os números pares de um array.

function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 27, 24, 78, 100, 99, 52];

console.log(filtraPares(meuArray));