const users = [
  { name: "Julio", idade: 28 },
  { name: "Ake", idade: 18 },
  { name: "Patricia", idade: 18 },
];

const buscarIdade = (name) => {
  let idadeProcurada = null;
  users.map((user) => {
    if (user.name === name) {
      idadeProcurada = user.idade;
    }
  });

  // return idadeProcurada != null && idadeProcurada;

  return idadeProcurada === null ? "Não encontrou" : idadeProcurada;
};

const idade = buscarIdade("Julio");

// Crie uma função que verifique se um número é positivo,
// negativo ou zero. E verifique se é par ou impa

/**
 * verificaTudoDeNumero
 * Essa função verifica se o número é positivo, blablabla
 * @param {Number} num numero a ser verificado
 */
const verificaTudoDeNumero = (num = 0) => {
  const identificadorDeValor =
    num > 0 ? "positivo" : num === 0 ? "zero" : "negativo";
  const epar = num % 2 === 0 ? "par" : "impar";

  console.log(identificadorDeValor);
  console.log(epar);
};

verificaTudoDeNumero();
