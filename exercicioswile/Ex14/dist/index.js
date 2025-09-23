"use strict";
/**
 * Exercício 14 – continue
 * Liste números de 1 a 20, pulando múltiplos de 3.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let m = 1;
while (m <= 20) {
    if (m % 3 === 0) {
        m++; // importante incrementar antes de continuar
        continue; // pula o restante e volta ao while
    }
    console.log(m);
    m++;
}
//# sourceMappingURL=index.js.map