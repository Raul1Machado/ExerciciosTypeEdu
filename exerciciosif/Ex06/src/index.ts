/**
 * Exercício 06 – Nota e faltas
 * Aprovado se nota >= 7 e faltas <= 10.
 */

let materia: string = "Matemática";
let notaFinal: number = 8;
let faltas: number = 12;

if (notaFinal >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia}.`);
} else {
  console.log(`Reprovado em ${materia}.`);
}