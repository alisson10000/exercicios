// 1. Construir um programa que contenha uma matriz 4X3 e o programa deverá escrever todos os valores contidos nessa matriz.
/*
let matrizNumeros: number[][] = [

    [2, 3, 5],
    [1, 5, 4],
    [5, 6, 8],
    [7, 8, 9]
]


console.log(matrizNumeros)

// ou

document.write(`<table border='1'>`)

for (let linha = 0; linha < 4; linha++) {
    document.write(`<tr>`)
    for (let coluna = 0; coluna < 3; coluna++) {
        document.write(`<td> ${matrizNumeros[linha][coluna]} </td>`)
    }

    document.write(`<tr>`)
}

document.write(`</table>`)
*/
// 2. Construir um programa que contenha uma matriz 3X3 e o usuário irá escolher uma linha para visualizar os valores que contenham nesta linha da matriz.
/*
let matrizNumeros: number[][] = [
    [2, 3, 5],
    [1, 5, 4],
    [5, 6, 8]
]
const entradaLinha: string | null = prompt(`Informe a linha ao qual deseja ver os elementos:`)
if (entradaLinha !== null) {
    let linhaUsuario = parseInt(entradaLinha)
    linhaUsuario = linhaUsuario - 1
    for (let linha = 0; linha < 3; linha++) {
        if (linha === linhaUsuario) {
            for (let coluna = 0; coluna < 3; coluna++) {
                console.log(`A linha escolhida foi: ${linhaUsuario + 1} , sendo os números: ${matrizNumeros[linha][coluna]}`)
            }
        }
    }
}
*/
// 3. Construir um programa no qual o usuário digitará valores em uma matriz 4X4 e
//  o programa irá escrever a soma dos valores de cada linha e de cada coluna.
/*

const matriz: number[][] = [

[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]

];

// Preencher a matriz 4x4
for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {


        let entradaValorMatriz = prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]:`)

        if (entradaValorMatriz !== null) {
            matriz[i][j] = parseFloat(entradaValorMatriz) || 0;
        }



    }
}

matriz.forEach(element => {
    console.log(element)
});



document.write(`<table border='1'>`)

for (let linha = 0; linha < 4; linha++) {
    document.write(`<tr>`)
    for (let coluna = 0; coluna < 4; coluna++) {
        document.write(`<td> ${matriz[linha][coluna]} </td>`)
    }

    document.write(`<tr>`)
}

document.write(`</table>`)






// Calcular e exibir a soma das linhas
console.log('Soma das Linhas:');
for (let i = 0; i < 4; i++) {
    let somaLinha = 0;
    for (let j = 0; j < 4; j++) {
        somaLinha += matriz[i][j];
    }
    console.log(`Linha ${i + 1}: ${somaLinha}`);
}

// Calcular e exibir a soma das colunas
console.log('\nSoma das Colunas:');
for (let j = 0; j < 4; j++) {
    let somaColuna = 0;
    for (let i = 0; i < 4; i++) {
        somaColuna += matriz[i][j];
    }
    console.log(`Coluna ${j + 1}: ${somaColuna}`);
}
*/ 
