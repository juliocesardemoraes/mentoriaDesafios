// for (let i = 0; i < amigos.length; i++) {
//   console.log(amigos[i]);
// }

// amigos.map((item) => {
//   console.log(item);
// });

/*
Exercícios com Loop For:
Imprima números de 1 a 10.
Imprima a tabela de multiplicação por 5.
Calcule a soma de números de 1 a 100.
Imprima números pares de 2 a 20.
Imprima o quadrado de números de 1 a 5.
Imprima o reverso de uma matriz dada.
Itere por uma matriz e imprima cada elemento.
Imprima o fatorial de um número.
Imprima a série de Fibonacci até 10 elementos.
Itere por um objeto e imprima pares chave-valor.
*/

/*

Exercício 3

Escreva uma função chamada oddUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem ímpares.

Exemplo:
Chamada da função: oddUpToTwenty()
Saída: 1,3,5,7,9 ...19
*/

// const oddUpToTwenty = () => {
//   const numerosImpares = [];
//   for (let i = 0; i < 21; i++) {
//     if (i % 2 === 1) {
//       numerosImpares.push(i);
//     }
//   }
//   return numerosImpares;
// };

const acharAmigo = (amigo) => {
  const amigos = ["João", "Maria", "Pedro", "Ana", "Carlos", "Lucas", "Thiago"];

  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i] === amigo) {
      console.log(`O ${amigo} está na posição do array`, i);
    }
  }
};

acharAmigo("Pedro");
