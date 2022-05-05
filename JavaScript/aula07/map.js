/* 

Map - Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele. 
*/

const uva ={
    value: 2,
}

const laranja ={
    value: 3,
}


function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;   
    }, thisArg);
}

const nums = [1,2];

console.log('this -> uva', mapComThis(nums, uva));

console.log('this -> laranja', mapComThis(nums, laranja));



// sem utilizar o this 

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    });
}

console.log(mapSemThis(nums));

