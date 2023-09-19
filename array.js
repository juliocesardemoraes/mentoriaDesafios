const array = ["x", "-", "-", "-", "-", "-"];

// Fazer o x chegar até o length
//

console.log(array.length);

for (let i = 0; i < array.length; i++) {
  console.log(array);
  array[i] = "-";
  if (i < array.length - 1) array[i + 1] = "x";
}
