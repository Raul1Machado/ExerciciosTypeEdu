"use strict";
/**
 * ts/ex2_veiculos.ts
 * Conceitos: literais, união, enum, objetos, arrays, Map, funções utilitárias
 */
Object.defineProperty(exports, "__esModule", { value: true });
const v1 = { placa: 'ABC1D23', tipo: 'carro', ano: 2020, fabricante: 'Chevrolet', cor: 'preto' };
console.log('1) Veículo:', v1);
// 2) Lista + filtros + mapeamentos
const frota = [
    v1,
    { placa: 'XYZ9K88', tipo: 'moto', ano: 2018, fabricante: 'Honda', cor: 'vermelho' },
    { placa: 'JKL2M34', tipo: 'caminhao', ano: 2022, fabricante: 'Volvo', cor: 'branco' },
];
const soCarros = frota.filter(v => v.tipo === 'carro');
const anos = frota.map(v => v.ano);
console.log('2) Filtros/Map:', { soCarros, anos });
// 3) Enum + helpers
var CorPadrao;
(function (CorPadrao) {
    CorPadrao["Preto"] = "preto";
    CorPadrao["Branco"] = "branco";
    CorPadrao["Vermelho"] = "vermelho";
})(CorPadrao || (CorPadrao = {}));
function pintar(v, cor) {
    return { ...v, cor };
}
console.log('3) Pintando veículo:', pintar(v1, CorPadrao.Branco));
// 4) Função utilitária: normalizar placa
function normalizarPlaca(p) {
    return p.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}
console.log('4) Placa normalizada:', normalizarPlaca('abc-1d23'));
// 5) Map por tipo (agrupamento)
const porTipo = new Map();
for (const v of frota) {
    const arr = porTipo.get(v.tipo) ?? [];
    arr.push(v);
    porTipo.set(v.tipo, arr);
}
console.log('5) Agrupados por tipo:', Array.from(porTipo.entries()));
//# sourceMappingURL=index.js.map