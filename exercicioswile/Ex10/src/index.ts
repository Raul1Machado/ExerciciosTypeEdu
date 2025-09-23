/**
 * Exercício 10 – Busca linear com while
 * Verifique se um valor existe no array; se achar, pare (break).
 */

let lista: string[] = ["sql", "ts", "js", "python", "go"];
let alvo: string = "python";
let pos: number = 0;
let encontrado: boolean = false;

while (pos < lista.length) {
  if (lista[pos] === alvo) {
    encontrado = true;
    break; // interrompe o loop quando encontra
  }
  pos++;
}

console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");