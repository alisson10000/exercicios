function soma(numeroUm, numeroDois) {
    var somar = numeroUm + numeroDois;
    console.log("O resultado da soma \u00E9 ".concat(soma));
}
var entradaNumeroUm = prompt("Digite o primeiro n\u00FAmero para soma :");
var entradaNumeroDois = prompt("Digite o segundo n\u00FAmero para soma :");
switch (true) {
    case entradaNumeroUm !== null && entradaNumeroDois !== null:
        var numeroUm = parseFloat(entradaNumeroUm);
        var numeroDois = parseFloat(entradaNumeroDois);
        soma(numeroUm, numeroDois);
        break;
    default:
        console.log("error");
        break;
}
