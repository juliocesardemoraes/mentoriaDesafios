// var x = 42

let texto1 = "blasss";
const texto2 = "bla";
const PI = 3.1415;
let xfora = 32; // ESCOPO GLOBAL
const teste = () => {
  let xdentro = 1; // ESCOPO LOCAL
  return xdentro;
};

const xdentro = teste();
console.log("XDENTRO", xdentro);
// // NUM
// let num = 5;

// // String
// let nome = "João";
// let frase = "O rato roeu a roupa do rei de Roma.";

// // Boolean
// let sim = true;
// let nao = false;

// // Undefined
// let x;

// //Null
// let y = null;

// Object

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  dono: "jc",
};

// CRUD - CREATE READ UPDATE DELETE

// Array - CREATE READ UPDATE DELETE
let cores = ["azul", "verde", "vermelho"];
let cores2 = [...cores];

cores.push("branco");
cores.unshift("branco");
cores.pop();
cores.shift();

// CORES [ 'azul', 'verde', 'vermelho' ]

let cores = ["azul", "verde", "vermelho"];

cores.map((cor, numero) => {
  console.log("item", cor);
  console.log("item", numero);
});

for (let i = 0; i < cores.length; i++) {
  console.log("item", cores[i]);
  console.log("item", i);
}
