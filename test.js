function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomNumber = getRandomInt(100);

let typed = -10000;
console.log("NUM ALEATORIO", randomNumber);

while (typed != randomNumber) {
  typed = Number(prompt("ADVINHAR NUMERO DE 0 a 100"));
}


// for