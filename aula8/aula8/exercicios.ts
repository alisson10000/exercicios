// exercicio 1
/*
let meuVetor:number[] = [1,2,3,4,5,6,7,8,9,10]


for(let iteracao = 0; iteracao < meuVetor.length; iteracao++){


console.log(`Vetor valor ${meuVetor[iteracao]}`)


}
*/

// exercicio 2 
/*
let meuVetor: number[] = [9, 3, 2, 6, 8]


meuVetor.forEach(element => {
    console.log(`O valor do vetor é ${element}`)
});

const entradaPosicaoVetor: string | null = prompt(`Qual posição do vetor você quer mudar? `)

const entradaValorVetor: string | null = prompt(`Qual numero voce quer inseri no veto`)




if (entradaPosicaoVetor !== null && entradaValorVetor !== null) {
    let posicaoVetor: number = parseInt(entradaPosicaoVetor)
    let valorVetor: number = parseInt(entradaValorVetor)
    meuVetor.splice(posicaoVetor, 1)
    meuVetor.unshift(valorVetor);

    meuVetor.forEach(element => {
        console.log(`O valor modificado do vetor é ${element}`)
    });


}*/

// exercicio 2
// Construir um programa no qual o usuário digitará cinco estados brasileiros em um vetor e o 
// programa irá exibir os valores que estão na posição 0, 2 e 4.


/*

let estadosBrasileiros: string[] = []

for (let indice = 0; indice < 5; indice++) {
    let entradaEstadoBrasileiro = prompt(`Informe o estado`)
    estadosBrasileiros[indice] = entradaEstadoBrasileiro
}
for (let i = 0; i < estadosBrasileiros.length; i++) {
    if (i % 2 == 0) {
        console.log(`Posição ${i} --> ${estadosBrasileiros[i]}`)
    }
}*/

// 4. Construir uma página na qual o usuário digitará dez números e o programa somará e calculará 
// a média dos números digitados.


/*
let numerosMedia: number[] = []
let indice = 0
let somaNumeros = 0
let mediaNumeros = 0
for (indice; indice < 10; indice++) {
    let entradaNumerosMedia: string | null = prompt(`digite sequencia de numeros para media`)
    if (entradaNumerosMedia !== null) {
        numerosMedia[indice] = parseFloat(entradaNumerosMedia)
        somaNumeros = somaNumeros + numerosMedia[indice]
    }
}
numerosMedia.forEach(element => {
    console.log(element)
});
mediaNumeros = somaNumeros / 10
console.log(`A média dos números informado é: ${mediaNumeros}`)
*/

// 5. Construir uma página na qual o usuário digitará oito números e o programa escreverá, na tela,
// qual deles é o maior e qual deles é o menor.
/*
let vetorNumeros: number[] = []

let numeroMaior = 0

let numeroMenor = 0

let indice = 0

for (indice; indice < 8; indice++) {

    let entradaNumero: string | null = prompt(`Informe a cadeia de números:`)

    if (entradaNumero !== null) {
        vetorNumeros[indice] = parseFloat(entradaNumero)
        if (indice == 0) {
            numeroMaior = vetorNumeros[indice]
            numeroMenor = vetorNumeros[indice]
        }
        if (numeroMaior < vetorNumeros[indice]) {

            numeroMaior = vetorNumeros[indice]
        }

        if (numeroMenor > vetorNumeros[indice]) {
            numeroMenor = vetorNumeros[indice]
        }
    }
}


console.log(`O maior numero digitado foi: ${numeroMaior}`)
console.log(`O menor numero digitado foi: ${numeroMenor}`)
*/
// 6.Construir um programa no qual o usuário digitará dez números e o programa deverá calcular
// quantos deles são maiores que 10.

/*
let vetorNumeros: number[] = []
let indice = 0
let contadorMaiorDez = 0
for (indice; indice < 10; indice++) {
    let entradaNumero: string | null = prompt(`Informe 10 numeros: `)
    if (entradaNumero !== null) {
        let numero = parseFloat(entradaNumero)
        vetorNumeros[indice] = numero
        if (numero > 10) {
            contadorMaiorDez = contadorMaiorDez + 1
        }
    }
}
vetorNumeros.forEach(element => {
    console.log(element)
});
console.log(`Foram contabilizados ${contadorMaiorDez} maiores que 10.`)
*/

// 7. Construir uma página na qual o usuário digitará sete números e o programa 
// escreverá, na tela, 
// quantos deles são pares e quantos são ímpares.
/*
let iteracao = 0
let vetorNumeros:number[]=[]
let numeros:number = 0
let quantidadePares:number = 0
let quantidadeImpares:number = 0
let contagemVetor:number = 0
for(iteracao;iteracao <10 ; iteracao++){
    let entradaVetorNumeros: string | null = prompt(`Digite 10 numeros para verificar quantos são paraes e quantos são impares:`)
if(entradaVetorNumeros !== null){
    numeros = parseFloat(entradaVetorNumeros)
    vetorNumeros[iteracao]=numeros
}
}
console.log(`Quantidade de iterações ${iteracao}`)
for(contagemVetor;contagemVetor < iteracao ; contagemVetor++){
if(vetorNumeros[contagemVetor] % 2 == 0){
    quantidadePares++
  }
else{
    quantidadeImpares++
}
}
console.log(`Quantidade de numero pares é: ${quantidadePares}`)
console.log(`Quantidade de numero impares é: ${quantidadeImpares}`)
*/

// 8. Construir uma página na qual o usuário digitará o nome e
//  a média de cinco alunos. O programa
//escreverá, na tela, o nome de todos com a média acima ou igual a 6.

/*

let nomeAluno: string[] = []
let mediaAluno: number[] = []
let contagemAlunosAprovados: number = 0
for (let iteracao: number = 1; iteracao <= 2; iteracao++) {
    let entradaNomeAluno: string | null = prompt(`Informe o nome do aluno`)
    let entradaMediaAluno: string | null = prompt(`Informe a média desse aluno nome do aluno`)
    if (entradaNomeAluno !== null && entradaMediaAluno !== null) {
        let media = parseFloat(entradaMediaAluno)
        if (media >= 6) {
            nomeAluno.push(entradaNomeAluno)
            mediaAluno.push(media)

        }
    }
}
for(let contador = 0 ; contador < nomeAluno.length ; contador++){
    console.log(`Nome: ${nomeAluno[contador]} nota ${mediaAluno[contador]}`)
}
*/

// 9. Construir uma página na qual o usuário digitará o nome, o telefone e a cidade de seis pessoas
// e o programa exibirá na tela, o nome e o telefone das pessoas que moram em “Niterói”.


/*

let pessoas: { nome: string; telefone: string; cidade: string }[] = [];


for (let i = 0; i < 3; i++) {
    let nome = prompt('Digite o nome da pessoa:');
    let telefone = prompt('Digite o telefone da pessoa:');
    let cidade = prompt('Digite a cidade da pessoa:');

   
    pessoas.push({ nome, telefone, cidade });
}
// Exibir informações no console
console.log('Informações das pessoas de Niterói:');
for (let iteracao = 0; iteracao < pessoas.length; iteracao++) {
let pessoa = pessoas[iteracao]
    if (pessoa.cidade.toLowerCase() == 'niterói') {
        console.log(`Nome: ${pessoa.nome}, Telefone: ${pessoa.telefone}, Cidade: ${pessoa.cidade}`);
    }

}

*/

// 10. Construir uma página na qual o usuário digitará o nome e a média de cinco alunos e o
// programa só aceitará a média do aluno caso ela esteja entre 0 e 10.
/*
const alunos = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt(`Digite o nome do aluno ${i + 1}:`);

  let media;
  do {
    media = parseFloat(prompt(`Digite a média do aluno ${i + 1}:`));
  } while (isNaN(media) || media < 0 || media > 10);

  alunos.push({ nome, media });
}

console.log('Lista de alunos:');
alunos.forEach(aluno => {
  console.log(`Nome: ${aluno.nome}, Média: ${aluno.media}`);
});
*/