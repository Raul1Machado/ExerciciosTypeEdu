"use strict";
/**
 * Exercício 11 – Função fatorial
 * Criar uma função que calcule o fatorial de um número.
 * Ex: 5! = 5*4*3*2*1 = 120
 */
Object.defineProperty(exports, "__esModule", { value: true });
function fatorial(n) {
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log(`Fatorial de 5 = ${fatorial(5)}`);
//# sourceMappingURL=index.js.map