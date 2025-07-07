/*   
 exploramos os operadores lógicos "igual a" e "diferente de" em JavaScript. 
 A diferença entre comparar conteúdo e tipo é destacada. 
 O operador "igual a" verifica apenas o conteúdo, enquanto o operador "diferente de" compara o conteúdo. 
 Exemplos práticos são fornecidos para ilustrar como esses operadores funcionam. 
 É importante entender essa distinção ao realizar comparações em JavaScript.


*/


let one = 1
let two = 2

// == igual a

console.log("### IGUAL A ###")

console.log(one == two)
console.log(one == 1)
console.log(one == "1")

// != diferente de

console.log("### DIFERENTE DE ###")

console.log(one != two )
console.log(one != 1)
console.log(one != "1")



/*   

Estritamente Igual e Diferente
Nesta aula, expliquei sobre os operadores de comparação estritamente igual a (===) e estritamente diferente de (!==) em JavaScript. 
O operador estritamente igual a compara tanto o valor quanto o tipo das variáveis, enquanto o estritamente diferente de faz o mesmo, mas retorna verdadeiro se os tipos forem diferentes. 
Recomendei o uso desses operadores para garantir comparações precisas, especialmente ao lidar com diferentes tipos de dados, evitando erros comuns, como concatenar em vez de somar valores.

*/


let number1 = 10
let number = 20

// === estritamente igual a (tipo e valor)

console.log(number1 === 10)
console.log(number1 === "1")


// !== estritamente diferente de 

console.log(one !== two)
console.log(number1 !== Number)
console.log(number1 !== 10)
console.log(number1 !== 10)