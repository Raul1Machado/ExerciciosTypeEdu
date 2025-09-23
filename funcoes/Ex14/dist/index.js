"use strict";
/**
 * Exercício 14 – Função calculadora
 * Criar uma função que recebe dois números e um operador (+, -, *, /).
 */
Object.defineProperty(exports, "__esModule", { value: true });
function calculadora(a, b, op) {
    if (op === "+")
        return a + b;
    if (op === "-")
        return a - b;
    if (op === "*")
        return a * b;
    if (op === "/") {
        if (b === 0) {
            console.log("Erro: divisão por zero.");
            return NaN;
        }
        return a / b;
    }
    console.log("Operador inválido!");
    return NaN;
}
// Exemplos
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));
//# sourceMappingURL=index.js.map