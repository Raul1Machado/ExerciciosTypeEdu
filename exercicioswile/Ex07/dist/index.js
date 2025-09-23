"use strict";
/**
 * Exercício 07 – Fibonacci com while
 * Imprima os 10 primeiros números da sequência.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let a = 0;
let b = 1;
let termos = 10;
let contador = 1;
while (contador <= termos) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
    contador++;
}
//# sourceMappingURL=index.js.map