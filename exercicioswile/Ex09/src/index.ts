/**
 * Exercício 09 – Maior valor do array
 * Percorra o array e encontre o maior elemento.
 */

let nums: number[] = [5, 12, 3, 27, 9, 27, 1];
let iMax: number = 0;
let maior: number = nums[0];

while (iMax < nums.length) {
  if (nums[iMax] > maior) {
    maior = nums[iMax];
  }
  iMax++;
}

console.log(`Maior valor = ${maior}`);