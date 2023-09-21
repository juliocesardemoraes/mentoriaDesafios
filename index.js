const arrayTeste = ["testea", "testeb", "testec"];

const users = [{ name: "Julio" }, { name: "Ake" }, { name: "Patricia" }];

// for(let i=0; i<users.length; i++)
// ident //stop         //incremento ou decremento
// for(let i=users.length; i>0; i--)

let nome = "";
let pos = null;

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Patricia") {
    pos = i;
  }
}

// console.log("A posicao é: ", pos);
// console.log("Os dados do usuário são:", users[pos]);
