// const amigos = ["João", "Maria", "Pedro", "Ana", "Carlos"];
// const amigoParaEncontrar = "Ana";

// for (let i = 0; i < amigos.length; i++) {
//   if (amigos[i] === amigoParaEncontrar) {
//     console.log(`O ${amigoParaEncontrar} está na posição: `, i);
//   }
// }

// amigos.map((item) => {
//   console.log(item);
// });

// const amigos2 = ["João", "Maria", "Pedro", "Ana", "Carlos"];

// amigos2.map((item, index) => {
//   // 0 1 2 3 4
//   console.log(index);
//   console.log("ITEM", item);
// });

let numero = 0;

// Numero negativo if
// Numero positivo else if
// Numero zero

// if (numero < 0) console.log("Esse numero é negativo!");
// else if (numero > 0) console.log("Esse numero é positivo!");
// else console.log("Esse numero é o zero!");

// let isNumermoMaiorQueNove = numero > 9 ? true : false;

// switch (numero) {
//   case 1:
//     console.log("O numero é: 1");
//     break;
//   case 2:
//     console.log("O numero é: 1");
//     break;
// }
const num1 = 10;
const num2 = 20;

const soma = (num1 = 0, num2 = 0) => {
  return num1 + num2; // ESCOPO
};

console.log(soma());


