// Vetores (Arrays)

// Criando o array:

var array = ["Raquel", 24, false];
console.log(array);


let array2 = ["Camila", 2, true, [array]];
console.log(array2);

// Acessando o conteúdo de um array: dentro do [] eu coloco a posição  do conteúdo que eu quero verificar. 

console.log(array2[3]); 

// Manipulando Array 

// forEach() executa uma dada função em cada elemento de um array 

// index é a posição do item no array

array2.forEach(function(item, index){console.log(item, index)});

// push  - Inseri  um novo dado no final do array 

array2.push("Pedro"); 

console.log(array2);

// Pop - remove um item no final do array

array2.pop();

console.log(array2);

// shift - Retira um item do inicio do array 

array.shift();
console.log(array);

// Unshift - Adiciona um item no ínicio do array.

array.unshift("Pedro");
console.log(array);

// indexOf - Retorna o index (posição) de um item.

console.log(array2.indexOf(true));

// splice - Remove um item ou altera um indece.

console.log(array2);

//array2.splice(0, 2);

console.log(array2);

// Slice - retorna só a parte do array definido.

array2.slice(0, 2);
console.log(array2)

// OBJETOS 

var xicara ={
    cor:  'Azul',
    tamanho: 'P',
    array: [array2],
    objectInterno: {
        cor: 'Amareo',
        Tamanho: 'M'
    }
}

console.log(xicara);

//Acessando apenas um elemento do objeto. 

console.log(xicara.objectInterno);

// Salvando o conteudo do objeto em var. 

var cor = xicara.cor;

console.log(cor)

var array3 = xicara.array;

console.log(array3)