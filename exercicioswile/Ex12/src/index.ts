/**
 * Exercício 12 – Palíndromo
 * Verifique se a palavra é igual quando lida ao contrário.
 */

let palavra: string = "radar";
let esq: number = 0;
let dir: number = palavra.length - 1;
let ehPalindromo: boolean = true;

while (esq < dir) {
  if (palavra[esq] !== palavra[dir]) {
    ehPalindromo = false;
    break;
  }
  esq++;
  dir--;
}

console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");
