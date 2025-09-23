/**
 * Exercício 09 – Senha forte
 * Verifique se a senha tem pelo menos 8 caracteres.
 */

let senhaNova: string = "abc12345";

if (senhaNova.length >= 8) {
  console.log("Senha forte.");
} else {
  console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}