/**
 * Exercício 06 – Fatorial
 * Calcule 5! usando while (5*4*3*2*1).
 */

let num: number = 5;
let fat: number = 1;
let c: number = num;

while (c > 1) {
  fat *= c;
  c--;
}

console.log(`${num}! = ${fat}`);
