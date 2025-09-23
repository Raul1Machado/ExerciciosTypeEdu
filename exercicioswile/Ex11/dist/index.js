"use strict";
/**
 * Exercício 11 – Inverter string
 * Monte uma nova string com os caracteres na ordem inversa.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let texto = "TypeScript";
let invertido = "";
let p = texto.length - 1;
while (p >= 0) {
    invertido += texto[p];
    p--;
}
console.log(`Original: ${texto}`);
console.log(`Invertido: ${invertido}`);
//# sourceMappingURL=index.js.map