// exercicio 1
/*const entradaNumero = parseInt(prompt("Informe um número entre 1 e 12"));

switch (entradaNumero) {
    case 1:
        console.log("Mês de janeiro");
        break;
    case 2:
        console.log("Mês de fevereiro");
        break;
    case 3:
        console.log("Mês de março");
        break;
    case 4:
        console.log("Mês de abril");
        break;
    case 5:
        console.log("Mês de maio");
        break;
    case 6:
        console.log("Mês de junho");
        break;
    case 7:
        console.log("Mês de julho");
        break;
    case 8:
        console.log("Mês de agosto");
        break;
    case 9:
        console.log("Mês de setembro");
        break;
    case 10:
        console.log("Mês de outubro");
        break;
    case 11:
        console.log("Mês de novembro");
        break;
    case 12:
        console.log("Mês de dezembro");
        break;
    default:
        console.log("Mês inválido");
}

*/
// exercicio 2
/**
 * . Agora, o estudante construirá, utilizando o comando Switch), um programa para o Senac. O instrutor irá digitar um desses três conceitos (A,
PA ou NA). Caso ele escolha A, escreverá na tela “Atendido”; caso ele escolha PA, o programa escreverá na tela “Parcialmente Atendido”; ou
caso ele digite NA, o programa colocará na tela “Não Atendido”.

 *
 */
/*
var entradaConceito = prompt("Informe o conceito do aluno: A para atendido, PA parcialmente atendido e NA não atendido");



switch (entradaConceito) {
    case "A":
        console.log("Atendido na UC");
        break;
    case "PA":
        console.log("Parcialmente atendido");
        break;
    case "NA":
        console.log("Não atendido");
        break;

    default:
        console.log("Valor inválido utilize a caixa alta para informar valores");
}
*/
// exercicio 3 Operador ternário
/**
 * : o usuário digitará a sua idade. Caso seja menor de idade, o programa escreverá “Usuário Menor de Idade” e, caso
tenha mais de dezoito anos, escreverá “Usuário maior de idade”.

 */
/*
const entradaIdade = parseInt(prompt("informe a sua idade"))



const idade = entradaIdade >=18 ? "Pessoa maior de idade" : "Pessoa menor de idade"

console.log(idade)
*/
/**Exercicio 4
 * 1. O usuário de uma página de games deverá digitar sua pontuação. Caso digite um valor acima de 1.000, o programa retornará
o texto “Usuário VIP” ou, caso contrário, “Aumente sua pontuação para se tornar um usuário VIP”.
 *
 */
/*
const pontuacao = parseInt(prompt("Digite sua pontuação:"));
const mensagem = pontuacao > 1000 ? "Usuário VIP" : "Aumente sua pontuação para se tornar um usuário VIP";
console.log(mensagem);

*/
// exercicio 5
/**
 * . Um parque de diversões pediu para você montar um script onde o operador de um brinquedo irá digitar a altura de uma
criança. Caso a altura seja menor que 1.20 metros, o programa retornará a mensagem “Acesso apenas para crianças com mais
de um metro e vinte”, caso contrário, “Acesso liberado”.

 */
/*
var entradaAltura = prompt("Informe a altura da criança")

var altura = parseInt(entradaAltura) < 1.2 ? "Acesso para crianças apenas maiores a 1,2 de altura" : "acesso liberado"

console.log(altura)
*/
//exercicio 6 
/**
 * Uma empresa de tecnologia contratou você para realizar um pequeno script, que exibirá, na tela, uma contagem
regressiva de 10 até 0.
 */
/*
let contagemRegressiva = 10

while (contagemRegressiva >= 0) {
    //document.write("<pre>")
    // document.writeln(`${contagemRegressiva}`)
    console.log(contagemRegressiva)
    contagemRegressiva = contagemRegressiva - 1;
    // document.write("</pre>")
}*/
// exercicio 7
/**
 * Criar uma página na qual a saída dela é a tabuada de multiplicação de 5 (utilizar o comando While).
Exemplo de saída:
 */
/*

let tabuadaCinco = 1


while(tabuadaCinco <= 10){

let resultadoTabuada = 5 * tabuadaCinco

console.log(resultadoTabuada)

tabuadaCinco = tabuadaCinco + 1

}
*/
var entradaNumero = prompt("Digite um número de 1 a 10 para calcular a sua tabuada");
if (entradaNumero !== null) {
    var numero = parseFloat(entradaNumero);
    var contagem = 1;
    while (contagem <= 10) {
        var tabuada = contagem * numero;
        console.log("".concat(contagem, " x ").concat(numero, " = ").concat(tabuada));
        contagem++;
    }
}
