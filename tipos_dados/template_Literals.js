/*   
Template Literals
Nesta aula, abordamos o conceito de Template Literals, um recurso para manipular Strings de forma mais eficiente. 
Demonstramos como criar mensagens formatadas combinando variáveis, destacando a diferença entre concatenar texto e usar Template Literals para facilitar a leitura e organização do código. 
Com Template Literals, é possível inserir variáveis diretamente em uma string de forma mais simples e dinâmica, tornando a construção de frases mais eficiente e legível.

*/

// Template literals (template strings, interpolação de string)

let username = "Felipe"
let email = "dias@felipe"

// Passar mais de um parâmetro

console.log(username, email, "Testando aplicação")


// Concatenar texto 

let messagem = "Olá, "+ username + ". Você conectou com o e-mail " + email

console.log(messagem) 

// Template literals 

console.log(`Olá, ${username}. Você conectou com o e-mail ${email}. `)