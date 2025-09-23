"use strict";
/**
 * Exercício 06 – Fatorial
 * Calcule 5! usando while (5*4*3*2*1).
 */
Object.defineProperty(exports, "__esModule", { value: true });
let num = 5;
let fat = 1;
let c = num;
while (c > 1) {
    fat *= c;
    c--;
}
console.log(`${num}! = ${fat}`);
//# sourceMappingURL=index.js.map