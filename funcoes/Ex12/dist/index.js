"use strict";
/**
 * Exercício 12 – Função juros simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 */
Object.defineProperty(exports, "__esModule", { value: true });
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
console.log(`VF = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);
//# sourceMappingURL=index.js.map