"use strict";
/**
 * Exercício 05 – Média de Notas
 * Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let n1 = 7;
let n2 = 5;
let n3 = 9;
let media = (n1 + n2 + n3) / 3;
console.log(`Média: ${media.toFixed(2)}`);
if (media >= 6) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
// Fim do arquivo
//# sourceMappingURL=index.js.map