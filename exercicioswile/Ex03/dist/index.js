"use strict";
/**
 * Exercício 03 – Soma 1..N
 * Some todos os números de 1 até N (N=100).
 */
Object.defineProperty(exports, "__esModule", { value: true });
let N = 100;
let soma = 0;
let k = 1;
while (k <= N) {
    soma += k;
    k++;
}
console.log(`Soma de 1 até ${N} = ${soma}`);
//# sourceMappingURL=index.js.map