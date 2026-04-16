const prompt = require('prompt-sync')();
const veiculo = prompt('Digite o tipo do veículo: ');
const preco = Number(prompt('Digite o preço do veículo: '));
const entrada = preco * 0.5;
const parcela = (preco - entrada) / 12;

console.log(`O veículo é: ${veiculo}\nEntrada: R$ ${entrada.toFixed(2)}\n12 parcelas de R$ ${parcela.toFixed(2)}`);