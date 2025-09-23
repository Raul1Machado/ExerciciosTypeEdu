"use strict";
/**
 * Exercício 05 – Classificação etária
 * Criança (<12), Adolescente (12–17), Adulto (18–59), Idoso (60+).
 */
Object.defineProperty(exports, "__esModule", { value: true });
let idadePessoa = 35;
if (idadePessoa < 12) {
    console.log("Criança");
}
else if (idadePessoa < 18) {
    console.log("Adolescente");
}
else if (idadePessoa < 60) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
//# sourceMappingURL=index.js.map