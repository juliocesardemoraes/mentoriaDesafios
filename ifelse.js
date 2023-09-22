let numero = 4;

if (numero > 0) {
  console.log("O número é positivo");
} else {
  console.log("O número é negativo");
}

if (numero > 100) {
  console.log("numero maior do que 100");
}

let isPair = numero % 2 === 0 ? true : false;
console.log("e par", isPair);
