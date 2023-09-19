const caracteres = "ABCDEFGHIJKLMNOPQRSTUVXZ";
const caracteresMinusculos = "abcdefghijklmnopqrstuvxz";
const numeros = "0123456789";
const todosChars = `${caracteres}${caracteresMinusculos}${numeros}`;

const tamanhoSenha = 8;

let senha = "";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < tamanhoSenha; i++) {
  const numeroAleatorio = getRandomInt(todosChars.length);
  senha += todosChars[numeroAleatorio];
}

console.log("senha", senha);
