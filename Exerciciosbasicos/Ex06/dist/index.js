"use strict";
/**
 * Exercício 06 – Aprovado com faltas
 * Regra: aprovado se nota >= 7 E faltas <= 10.
 * Caso contrário, reprovado.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let materia = "Matemática";
let nota = 8; // experimente alterar
let faltas = 12; // experimente alterar
if (nota >= 7 && faltas <= 10) {
    console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}
else {
    console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}
//# sourceMappingURL=index.js.map