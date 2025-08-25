/*  

Tipos de Dados

Neste estudo abordamos a importância dos tipos de dados em programação, destacando como definem o conteúdo de uma variável. 
No Javascript, uma linguagem dinâmica com tipos dinâmicos, o tipo da variável é definido pelo valor atribuído. 
Diferentemente de outras linguagens, no Javascript não é necessário declarar o tipo da variável. 
Exploramos os tipos primitivos, como String, Number, Boolean, Null e Undefined, ressaltando a flexibilidade em atribuir diferentes tipos a uma mesma variável. 
Esses conceitos são fundamentais para manipular dados de forma eficiente.

*/



// String 

console.log('hello, world')

let email = "dias@world.com"

console.log(email)

// Concatenação de strings

const firstName = 'Felipe'
const lastName  = 'Dias'
const fullName  = firstName + ' ' + lastName

console.log(fullName) 

// Acessando caracteres

console.log(fullName[3])

// O TYPEOF serve para descobrir o tipo de variavel

console.log(typeof email)

// comprimento de uma string / propriedade

console.log(fullName.length)

// Métodos de string

// 

console.log(fullName.toUpperCase())

//
const resultado = fullName.toLowerCase()

console.log(resultado)  

//
const index = email.indexOf('@') // o que passamos no parenteses de um método chamamos de argumento !!!

console.log(index)

// Métodos comuns de string

const Email = 'laracroft@gmail.com'

const lastIndexOfA = Email.lastIndexOf('a')

//console.log(lastIndexOfA)

const emailSlice = Email.slice(4,9)
//console.log(emailSlice)


const emailReplace = Email.replace('laracroft', 'Felipe-Dias')
console.log(emailReplace)












