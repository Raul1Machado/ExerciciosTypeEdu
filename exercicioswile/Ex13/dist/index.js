"use strict";
/**
 * Exercício 13 – do...while
 * Some números aleatórios de 1 a 10 até ultrapassar 50.
 * (Sem entrada do usuário; apenas demontração de do...while)
 */
Object.defineProperty(exports, "__esModule", { value: true });
let acumulador = 0;
let sorteado;
do {
    // "Simula" um número entre 1 e 10 (inteiro)
    sorteado = Math.floor(Math.random() * 10) + 1;
    acumulador += sorteado;
    console.log(`Sorteado: ${sorteado} | Acumulado: ${acumulador}`);
} while (acumulador <= 50);
console.log("Limite atingido!");
//# sourceMappingURL=index.js.map