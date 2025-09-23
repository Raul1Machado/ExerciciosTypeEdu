"use strict";
/**
 * Exercício 11 – Juros Simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 * Taxa em decimal (5% = 0.05).
 */
Object.defineProperty(exports, "__esModule", { value: true });
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
// Exemplo:
let capital = 1000;
let taxa = 0.05;
let tempo = 12;
let vfSimples = jurosSimples(capital, taxa, tempo);
console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`);
// Fim do arquivo
//# sourceMappingURL=index.js.map