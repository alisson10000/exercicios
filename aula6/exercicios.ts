
// exercicio 1

/*let decremento = 10


for(decremento=10;decremento >=0 ; decremento--){


console.log(`Contagem: ${decremento}`)


}*/
// Exercicio 2
/*
const numero = 5
let iteracao = 0

for(iteracao; iteracao <=10 ; iteracao++){


    let tabuada = iteracao * numero

    console.log(`${iteracao} x ${numero} = ${tabuada}`)

}

*/

// exercicio 3
/*
let entradaNumero: string | null = prompt("Informe um número para a contagem regresiva: ")
if(entradaNumero !== null){
    let numero = parseFloat(entradaNumero)
let decremento = numero
for(decremento ; decremento >= 0; decremento--){

    console.log(`Contagem : ${decremento}`)

}
}

*/
// exercicio 4
/*

let  entradaNumero: string | null = prompt("Digite um numero para calcular a sua tabuada: ")
if(entradaNumero !== null){
    let numero = parseFloat(entradaNumero)
    let iteracao = 0
    for(iteracao = 0;iteracao <= 10 ; iteracao++){
    
        let tabuada = iteracao * numero
        console.log(`${iteracao} x ${numero} = ${tabuada}`)
    
    }
}

*/


// teste de mesa

let a = 5;
let b = 3;
let c = 1;
while(b < a){
 if (a > b){
 c++;
 }else{
 b++;
 }
 b++;
 console.log(c);
 
}


