"use strict";
/**
 * Exercício 10 – Função aprovação
 * Criar uma função que receba nota e faltas e retorne "Aprovado" ou "Reprovado".
 */
Object.defineProperty(exports, "__esModule", { value: true });
function verificarAprovacao(nota, faltas) {
    if (nota >= 7 && faltas <= 10) {
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}
console.log(verificarAprovacao(8, 5));
console.log(verificarAprovacao(6, 12));
//# sourceMappingURL=index.js.map