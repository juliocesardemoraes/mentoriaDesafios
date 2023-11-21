// const variavelTeste = "Teste";
// console.log("Valor da variavel", variavelTeste);
// console.log("Tipo da variavel", typeof variavelTeste);

// const username = "joao";
// let age = 25;
// age = 30;

// const phoneNumber = "1234567890";

// var const let
// var telefone = "valor";
// const - constante

// ESCOPOOOO

// let xfora = 32;

// const teste = () => {
//   console.log(xfora); // Ecossistema próprio
//   let xdentro = 1; // Escopo local

//   return xdentro;
// };

// const xDentroDoLadoDeFora = teste(); // 1;

// console.log(xDentroDoLadoDeFora);

// Tipos de varíavel
// let numero = "1";
// numero = Number(numero);
// numero += 1;
// console.log("String", numero);

// numero = 32;
// numero += 1;
// numero = String(numero);
// console.log("Number", numero);

// numero = undefined;
// console.log(numero);

// let interruptor = false;
// interruptor = true;

// let pessoa = null; // Undefined
// pessoa?.nome; // Undefined

// # Estruturas de dados compostas
// Alunos da escola primeiro de junho
// const alunoNome = "João";
// const alunoIdade = 15;
// const alunoNota = 7;
// const alunoEndereco = "Av dr silvestre";
// console.log(alunoNome);

// const aluno = {
//   nome: "João",
//   idade: 15,
//   nota: 7,
//   endereco: "Av Dr Silvestre",
// };

// // CRUD - CREATE READ UPDATE DELETE
// // CREATE
// aluno.media = 6;
// // READ
// console.log(aluno);
// console.log(aluno.nome);
// // UPDATE
// aluno.media = 7;
// console.log(aluno);

// // DELETE
// delete aluno.endereco;
// console.log(aluno);

// Array - Armazena uma lista de valores ordenada.
const numbers = [1, 2, 3, 4, 5];
// CRUD - CREATE READ UPDATE DELETE
// CREATE
numbers.push(10);
numbers.unshift(-1);

// READ
console.log(numbers[2]);

// UPDATE
numbers[0] = 10;
console.log("NUMBERS", numbers);

// DELETE
numbers.pop();
numbers.shift();
console.log("NUMBERS DELETE", numbers);

console.log("NUMBERS DELETE UNSHIFT", numbers);
