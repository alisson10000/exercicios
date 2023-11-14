function soma(numeroUm: number, numeroDois: number):void {
    let somar = numeroUm + numeroDois
    console.log(`O resultado da soma é ${soma}`)
}

const entradaNumeroUm: string | null = prompt(`Digite o primeiro número para soma :`)
const entradaNumeroDois: string | null = prompt(`Digite o segundo número para soma :`)
switch (true) {
    case entradaNumeroUm !== null && entradaNumeroDois !== null:
        const numeroUm = parseFloat(entradaNumeroUm)
        const numeroDois = parseFloat(entradaNumeroDois)
        soma(numeroUm, numeroDois)
        break;
    default:
        console.log(`error`)
        break;
}