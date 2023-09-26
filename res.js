import { runTestSuite } from "./tests.js";

/*
1 - Declare uma constante chamada "anoAtual" - String e atribua a ela o valor do ano atual. Imprima o valor no console. 
*/
const anoAtual = "2023";

/*
2 - Crie um array de números chamado "numeros" e atribua alguns números a ele. Tente adicionar um novo número ao array e observe o resultado.
*/
const numeros = [1, 2, 3];

/* 3 - Crie um objeto const chamado "pessoa" com as propriedades "nome" e "idade". Atribua valores a essas propriedades. Tente modificar uma das propriedades e observe o resultado.
 */
const pessoa = {
  nome: "julio",
  idade: 23,
};

/*
4 - Crie um array chamado "frutas" com alguns nomes de frutas. Imprima o array completo no console.
*/
const frutas = [`maca`, `banana`];

/*
5 -[EXTRA] Crie uma função chamada "gerarNumeroAleatorio" que recebe dois parâmetros: um número mínimo e um número máximo(min,max). A função deve gerar e RETORNAR um número aleatório dentro desse intervalo (incluindo os limites). Em seguida, chame a função e imprima o número gerado no console.
*/
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * max + min);
}

/*
VALIDACAO DO PROGRAMA - NAO ALTERE O CODIGO ABAIXO, OU SENAO O RESULTADO
NAO SERA O MESMO
*/
const checkAnoAtual = typeof anoAtual == "undefined" ? null : anoAtual;
const checkNumerosAtual = typeof numeros == "undefined" ? null : numeros;
const checkPessoa = typeof pessoa == "undefined" ? null : pessoa;
const checkFrutas = typeof frutas == "undefined" ? null : frutas;
const checkNumeroAleatorio =
  typeof gerarNumeroAleatorio == "undefined" ? null : gerarNumeroAleatorio;

runTestSuite({
  anoAtual: checkAnoAtual,
  numeros: checkNumerosAtual,
  pessoa: checkPessoa,
  frutas: checkFrutas,
  numaleatorio: checkNumeroAleatorio,
});
