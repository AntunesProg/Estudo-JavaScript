const prompt = require ('prompt-sync')();
const tempo = Number(prompt('Digite o tempo de serviço em anos: '));
const salario = Number(prompt('Digite o salário atual: '));
let quatroAnos = Math.floor(tempo / 4);
const aumento = salario + salario * 0.01 * quatroAnos;
console.log(`O aumento é: R$ ${aumento.toFixed(2)}`);