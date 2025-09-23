/**
 * Exercício 07 – Login simples
 * Verifique se usuário e senha estão corretos.
 */

let usuario: string = "admin";
let senha: string = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}