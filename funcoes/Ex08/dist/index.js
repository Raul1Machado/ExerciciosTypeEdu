"use strict";
/**
 * Exercício 08 – Função par ou ímpar
 * Criar uma função que receba um número e diga se é par ou ímpar.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function parOuImpar(n) {
    if (n % 2 === 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
}
console.log(`7 é ${parOuImpar(7)}`);
//# sourceMappingURL=index.js.map