/*let numeroUm:number = 0
let numeroDois:number = 0
let somar:number = 0

numeroUm = parseFloat(prompt('Digite o primeiro numero: '))
numeroDois = parseFloat(prompt('Digite o primeiro segundo: '))

somar = numeroUm + numeroDois

console.log(`O resultado da soma é : ${somar}`)*/
// exercicio 2
/*

const numeroUm = 0
const quadrado: any= 0

numeroUm = parseFloat(prompt('Digite o primeiro numero: '))

quadrado = Math.pow(numeroUm,2)

console.log(`O resultado do quadrado é deste número é : ${quadrado}`)*/
/* Exercício 3

let nome:string = ""

nome = prompt("Informe o seu nome : ") || ""

console.log(`Seja bem vindo ${nome}`)

*/
/*/ Exercício 4

let numeroUm:number = 0
let numeroDois:number = 0
let somar:number = 0
let subtrair:number = 0
let dividir:number = 0
let multiplicar:number = 0

numeroUm = parseFloat(prompt('Digite o primeiro numero: '))
numeroDois = parseFloat(prompt('Digite o primeiro segundo: '))

somar = numeroUm + numeroDois
subtrair = numeroUm - numeroDois
dividir = numeroUm / numeroDois
multiplicar = numeroUm * numeroDois



console.log(`Os números digitados foram ${numeroUm} e ${numeroDois} .Os resultados estão abaixo: `)

console.log(`Soma:  ${somar}  `)
console.log(`Subtração: ${subtrair}  `)
console.log(`Divisão : ${dividir}`)
console.log(`Multiplicação : ${multiplicar} `) */
// Exercício 5
var informeIdade = prompt("Qual o ano que você nasceu? ");
var calculoIdade = 0;
if (informeIdade != null) {
    var idade = parseFloat(informeIdade);
    calculoIdade = 2030 - idade;
    console.log("No ano de 2030 voc\u00EA ter\u00E1  ".concat(calculoIdade, " anos. "));
}
