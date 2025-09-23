let valores: number[] = [10, 20, 30, 40, 50];
let idx: number = 0;
let total: number = 0;

while (idx < valores.length) {
  total += valores[idx]!;
  idx++;
}

console.log(`Total = ${total}`);
