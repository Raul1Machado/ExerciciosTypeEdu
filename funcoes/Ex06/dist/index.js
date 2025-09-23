"use strict";
/**
 * Exercício 06 – Função de divisão
 * Criar uma função que receba dois números e retorne a divisão.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: divisão por zero");
        return NaN;
    }
    return a / b;
}
console.log(`Resultado: ${dividir(20, 4)}`);
//# sourceMappingURL=index.js.map