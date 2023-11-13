// exercicio 1
/*
let entradaSalario =prompt("Informe o seu salário: ")


if(entradaSalario !== null){

const salario = parseFloat(entradaSalario)

    alert("Oferecer plano alfa")

}else{
    alert("Oferecer plano beta")
}
*/
// exercicio 2
/*const entradaColesterol = prompt("Informe o valor do seu colesterol:")

if (entradaColesterol !== null) {

    const colesterol = parseFloat(entradaColesterol)


    if (colesterol < 180) {
        console.log("saúde ok.")

    } else {
        console.log("Vamos procurar ajuda médica.")
    }
}*/
/*
//  exercicio 3
.
 Construir um programa no qual um vendedor irá digitar quanto ele vendeu em um mês na loja.
 Caso esse total de vendas seja maior ou igual a R$ 100.000,00 o programa irá calcular uma comissão
 de 4% sobre suas vendas, mas, caso a venda seja menor, o programa calculará apenas 2%.*/
/*
const entradaTotalVendas = prompt("Informe o total de vendas:")

if (entradaTotalVendas !== null) {

    const totalVendas = parseFloat(entradaTotalVendas)

    if (totalVendas >= 100000) {


        const comissao = totalVendas * 0.04


        console.log(`O vendedor terá uma comissão de 4% que dará R$ ${comissao} reais em seu salário`)




    } else {
        
        const comissao = totalVendas * 0.24


        console.log(`O vendedor terá uma comissão de 2% que dará R$ ${comissao} reais em seu salário`)

    }


}
*/
// exercício 4
/*1. A escola Lemos Segundo resolveu criar um programa para ajudar os professores nos conceitos dos estudantes. O(a)
professor(a) irá digitar a nota tirada pelo aluno. Caso seja menor do que 0 ou maior do que 10, o programa irá escrever
“Nota Inválida”; se for maior ou igual a 0 e menor do que 4, o programa irá escrever, “aluno reprovado”. Se a nota for maior
ou igual a 4 e menor do que 7, o programa irá escrever “Aluno em Recuperação” e, caso seja maior ou igual a 7 e menor ou
igual a 10, escreverá “Aluno Aprovado”.*/
/*
const entradaNota = prompt("Informe a nota tirada pelo aluno: ")

if (entradaNota !== null) {

    const notaAluno = parseFloat(entradaNota)

    if (notaAluno < 0 || notaAluno > 10) {
        console.log("Valor inválido para a nota")
    } else if (notaAluno >= 0 && notaAluno <= 4  ) {
        console.log("O aluno está em reprovado")
    } else if (notaAluno >= 5 && notaAluno <= 7  ) {
        console.log("O aluno está em recuperação")
    } else if (notaAluno >= 8 && notaAluno <= 10  ) {
        console.log("O aluno está em aprovado")
    }


}
*/
// exercicio 5
/**
 * . A escola Lemos Segundo gostou do sistema que você desenvolveu e, com isso, pediu um “upgrade”. Aproveitando o código
do exercício anterior, eles solicitaram que, no caso de o estudante ficar em recuperação, o programa deverá solicitar a
digitação de mais uma nota. Se essa nota for menor que 5, o programa escreverá “Reprovado na Recuperação” e, caso
contrário, “Aprovado na Recuperação”.
 *
*/
var entradaNota = prompt("Informe a nota tirada pelo aluno: ");
if (entradaNota !== null) {
    var notaAluno = parseFloat(entradaNota);
    if (notaAluno < 0 || notaAluno > 10) {
        console.log("Valor inválido para a nota");
    }
    else if (notaAluno >= 0 && notaAluno <= 4) {
        console.log("O aluno está em reprovado");
    }
    else if (notaAluno >= 5 && notaAluno <= 7) {
        console.log("O aluno está em recuperação");
        var entradaNotaRecuperacao = prompt("informe a nota da recuperação: ");
        if (entradaNotaRecuperacao !== null) {
            var notaRecuperacao = parseFloat(entradaNotaRecuperacao);
            if (notaRecuperacao < 0 || notaRecuperacao > 10) {
                console.log("Valor inválido para a nota de recuperação");
            }
            else if (notaRecuperacao >= 0 && notaRecuperacao <= 4) {
                console.log("Reprovado na recuperação");
            }
            else if (notaRecuperacao >= 5 && notaRecuperacao <= 10) {
                console.log("O aluno foi aprovado no periodo da recuperação");
            }
        }
    }
    else if (notaAluno >= 8 && notaAluno <= 10) {
        console.log("O aluno está em aprovado");
    }
}
