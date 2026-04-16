const prompt = require('prompt-sync')();

let pesoRacao = Number(prompt('Digite o peso da ração em kg: '));
let pesoGato = Number(prompt('Digite o consumo em gramas: '));

const racaoConsumida = pesoGato / 1000; // Convertendo o consumo para kg
const dias = pesoRacao / racaoConsumida;

console.log(`O gato pode ser alimentado por ${Math.floor(dias)} dias com a ração disponível.`);