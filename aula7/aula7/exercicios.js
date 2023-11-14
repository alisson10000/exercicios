// procedimentos procedores
/**
 * function imprimirMensagem():void{
    console.log("Olá, mundo!!!!")
 }

 imprimirMensagem()
 *
 *
 */
//  funcoes possuem retorno palavra reservada function
/*
function somar(numeroUm: number,numeroDois:number):number{
    const calculo = numeroUm + numeroDois

    return calculo

}


console.log(`o resultado do calculo é:  ${somar(5 , 3)}`)

const novoCalculo = 3 + somar(5,3)

console.log(`O novo resultado é: ${novoCalculo}`)

*/
// variáveis locais e globais
/*
function exemploVariavelLocal():void{

    let mensagem: string = "Olá mundo"
    console.log(mensagem)
}

//aqui a seguir vou gerar um erro de propósito

//console.log(mensagem)

// chamada correta da função

exemploVariavelLocal()
*/
// TESTE DE MESA 1 exercicio 1
/*
function adicionarElemento(elemento: number):number {

    elemento++;
    return elemento

}
let numeroA = 0
let numeroB = 5

for(let iteracao = 0 ; iteracao  <= 3 ; iteracao++){

numeroB = numeroA - iteracao
numeroA = adicionarElemento(numeroB)
console.log(numeroA)

}

// saida 1 0 -2
*/
// TESTE DE MESA 2 exercicio 2
/*
function adicionarNumero(numeroLocal) {

    numeroLocal++
    return numeroLocal

}

function removerNumero(numeroLocal) {
    numeroLocal--;
    return numeroLocal

}

let numeroA = 10
let numreroB = 2

while (numeroA > 5) {

    numeroA = numeroA - 4
    if (numreroB > 0) {
      numreroB = removerNumero(numreroB)


    }
    numeroA = adicionarNumero(numeroA)

console.log(numeroA)


}
// console.log(numeroA)

*/
// exercicio 3
/*
function somar(numeroUmLocal: number, numeroDoisLocal: number): number {
    let somar = numeroUmLocal + numeroDoisLocal
    return somar
}
const entradaNumeroUm: string | null = prompt(`Digite o primeiro valor para a soma: `)
const entradaNumeroDois: string | null = prompt(`Digite o segundo valor para a soma: `)
if (entradaNumeroUm !== null && entradaNumeroDois !== null) {
    let numeroUm = parseFloat(entradaNumeroUm)
    let numeroDois = parseFloat(entradaNumeroDois)
    console.log(`O resultado da soma é : ${somar(numeroUm, numeroDois)}`)
}
*/
// exercicio 4
/*
function comparaNumeroMaior(numeroUmLocal, numeroDoisLocal) {

    if (numeroUmLocal > numeroDoisLocal) {
        console.log(`O primerio  número ${numeroUmLocal} é maior que o numero ${numeroDoisLocal}`)

    } else {
        console.log(`O segundo número ${numeroDoisLocal} é maior que o numero ${numeroUmLocal}`)
    }

}

const entradaNumeroUm: string | null = prompt(`Digite o primeiro valor para verificar quem é o maior: `)
const entradaNumeroDois: string | null = prompt(`Digite o segundo valor para verificar quem é o maior: `)
if (entradaNumeroUm !== null && entradaNumeroDois !== null) {


    const numeroUm = parseInt(entradaNumeroUm)
    const numeroDois = parseInt(entradaNumeroDois)


    comparaNumeroMaior(numeroUm, numeroDois)

}

*/
// exercicio 5
/*
function comparaMaiorCompraMenor(numeroLocalUm:number,numeroLocalDois:number,numeroLocalTres:number):void{

if(numeroLocalUm < numeroLocalDois && numeroLocalUm < numeroLocalTres){

    console.log(`O número ${numeroLocalUm} digitado por primerio é menor. `)

}
else if(numeroLocalDois < numeroLocalUm && numeroLocalDois < numeroLocalTres){
    console.log(`O número ${numeroLocalDois} digitado por segundo é menor. `)
}
else{
    console.log(`O número ${numeroLocalTres} digitado por terceiro é menor. `)
}

if(numeroLocalUm > numeroLocalDois && numeroLocalUm > numeroLocalTres){

    console.log(`O número ${numeroLocalUm} digitado por primerio é maior. `)

}
else if(numeroLocalDois > numeroLocalUm && numeroLocalDois > numeroLocalTres){
    console.log(`O número ${numeroLocalDois} digitado por segundo é maior. `)
}
else{
    console.log(`O número ${numeroLocalTres} digitado por terceiro é maior. `)
}
}
const entradaNumeroUm: string | null = prompt(`Digite o primeiro número para comparar quem é maior ou  quem é o menor: `)
const entradaNumeroDois: string | null = prompt(`Digite o segundo número para comparar quem é maior ou  quem é o menor: `)
const entradaNumeroTres: string | null = prompt(`Digite o terceiro número para comparar quem é maior ou  quem é o menor: `)
if (entradaNumeroUm !== null && entradaNumeroDois !== null && entradaNumeroTres ) {
    const numeroUm = parseInt(entradaNumeroUm)
    const numeroDois = parseInt(entradaNumeroDois)
    const numeroTres = parseInt(entradaNumeroTres)
comparaMaiorCompraMenor(numeroUm , numeroDois , numeroTres)
}

*/
// exercicio 6
/*
function verificarParOuImpar(numeroLocalUm: number): void {

    if (numeroLocalUm % 2 == 0) {
        console.log(`O número ${numeroLocalUm} é par. `)
    }
    else {
        console.log(`O número ${numeroLocalUm} é impar. `)
    }


}

const entradaNumero: string | null = prompt(`Digite o terceiro número para saber se ele é par ou impar: `)
if (entradaNumero !== null) {


    const numero = parseFloat(entradaNumero)

    verificarParOuImpar(numero)



}
*/
// exercicio 7
/*
function verificaValorValido():void{
let executa = true
    while (executa) {
        const entradaVerificaNumero: string | null = prompt("Informe um numero que seja maior que zero e menor que 10")

        if (entradaVerificaNumero !== null) {


            let verificaNumero = parseInt(entradaVerificaNumero)

        if (verificaNumero < 0 || verificaNumero > 10) {
            verificaNumero = verificaNumero
            executa = true
        }
        else {
            executa =false
            let numero: number = verificaNumero
        }

    }
}
}
verificaValorValido()
console.log(`O númro informado é um valor válido.`)

*/
// VETORES
// vetor de números
/*
let numeros:number[] = [1,2,3,4,5]

// imprimir o numero de um vetor
console.log(`Vetor ${numeros[0]}`)

// percorrer um vetor
console.log(`percorrendo o vetor`)
//tamanho do vetor
console.log(`O vetor possui ${numeros.length} elementos.`)

for(let iteracao = 0; iteracao < numeros.length ; iteracao++){
    console.log(`Vetor ${numeros[iteracao]}`)
}



*/
// vetor de strings
/*
let frutas:string []= ["maçã","banana","uva","pera"]

for(let iteracao = 0; iteracao < frutas.length ; iteracao++){
    console.log(`Vetor ${frutas[iteracao]}`)
}
*/
// vetor de elementos quaisquer
/*
let qualquerValor:any[] = ["um",1,{nome:"joão", idade:"26 anos"}]

for(let iteracao = 0; iteracao < qualquerValor.length ; iteracao++){
    console.log(`Vetor ${qualquerValor[iteracao]}`)
}


let elemento: any


for (let iteracao = 0; iteracao < qualquerValor.length; iteracao++) {
    elemento = qualquerValor[iteracao];
    
    if (typeof elemento === 'object') {
        console.log(JSON.stringify(elemento));
    } else {
        console.log(elemento);
    }
}

console.log(elemento)

*/
// inserir valores em um vetor
/*
let meuVetor: number[] = [1, 2, 3];
// Atribuindo valores diretamente a índices específicos
meuVetor[3] = 4;
meuVetor[4] = 5;
console.log(meuVetor);  // Saída: [1, 2, 3, 4, 5]
meuVetor.forEach(element => {
    console.log(element)
});
*/
// inserindo valores utilizando o meuVetor.push(4);
var meuVetor = [1, 2, 3];
// Atribuindo valores diretamente a índices específicos
meuVetor.push(4);
meuVetor.push(5);
console.log(meuVetor); // Saída: [1, 2, 3, 4, 5]
meuVetor.forEach(function (element) {
    console.log(element);
});
