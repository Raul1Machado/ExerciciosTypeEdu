"use strict";
/**
 * Exercício 12 – Palíndromo
 * Verifique se a palavra é igual quando lida ao contrário.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let palavra = "radar";
let esq = 0;
let dir = palavra.length - 1;
let ehPalindromo = true;
while (esq < dir) {
    if (palavra[esq] !== palavra[dir]) {
        ehPalindromo = false;
        break;
    }
    esq++;
    dir--;
}
console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");
//# sourceMappingURL=index.js.map