//podemos declarar funções dentro de variáveis

//function expression or function anonymous
//além disso, podemos associar à função os parâmetros (parameters)
/* const sum = function(number1, number2){
    let result = number1 + number2
    console.log(result)
} */

//chamada da função com os argumentos (arguments)
/* sum(7, 3) */

//podemos exportar o produto da função através do return
const sum = function(number1, number2){
    let result = number1 + number2
    return result
}

let number1 = 55
let number2 = 45

console.log(`O primeiro número é: ${number1}`)
console.log(`O segundo número é: ${number2}`)
console.log(`O resultado da soma dos dois números é: ${sum(number1, number2)}`)