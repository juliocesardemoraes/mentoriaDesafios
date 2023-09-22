import { runTestSuite } from "./tests.js";

// EXERCICIO DE FUNCOES
// 1 - FUNCÃO CHAMADA  sum
// Escreva uma função chamada sum que receba dois números como parâmetros e retorne a soma deles.
const sum = () => {};

// 2 - FUNCÃO CHAMADA  ispair
// Crie uma função que verifique se um número é par e se chama e ispair. A função deve retornar true se for par e false caso contrário.
const ispair = () => {};

// 3 - FUNCÃO CHAMADA  highernum
// Faça uma função que receba um array de números como parâmetro chamada highernum e retorne o maior número presente no array.
const highernum = () => {};

// 4 - FUNCÃO CHAMADA  toUppercasePhrase
// Crie uma função que receba uma string como parâmetro e retorne a mesma string, porém com todas as letras em maiúsculas.
const toUppercasePhrase = () => {};

let tests = new Map();

try {
  if (sum != null) {
    tests.set("sum", sum);
  }
  if (sum != null) {
    tests.set("ispair", ispair);
  }
  if (sum != null) {
    tests.set("highernum", highernum);
  }
  if (sum != null) {
    tests.set("toUppercasePhrase", toUppercasePhrase);
  }
} catch (err) {
  console.log("Você não criou a função com os nomes corretos", err);
}

runTestSuite(tests);
