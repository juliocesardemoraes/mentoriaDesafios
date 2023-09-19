function getRandomInt(max, min) {
  return Math.floor(Math.random() * max + min);
}
const dado = getRandomInt(6, 1);
console.log("VALOR DO DADO", dado);


let erros = 0;
// for (let i = 0; i < 10000; i++) {
//   const dado = getRandomInt(6, 1);
//   if (dado < 1 || dado > 6) {
//     erros++;
//   }
// }

