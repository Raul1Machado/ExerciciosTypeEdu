function jurosCompostos(capital: number, taxa: number, tempo: number): number {
  return capital * Math.pow(1 + taxa, tempo);
}

// Exemplo:
let capitalC = 1000;
let taxaC = 0.05;
let tempoC = 12;

let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);
// Fim do arquivo