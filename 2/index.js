/*
Um programa que olhe para duas frases e as compare, mostrando as
diferenças entre cada frase.

*/

const comparar = () => {
  const texto1 = document.getElementById("1").value;
  const texto2 = document.getElementById("2").value;
  const textArea = document.getElementById("3");
  const maiorTexto =
    texto1.length > texto2.length ? texto1.length : texto2.length;
  let diferencas = "";
  textArea.value = "";

  for (let i = 0; i < maiorTexto; i++) {
    if (texto1?.[i] == null) {
      diferencas += texto2[i];
    }

    if (texto2?.[i] == null) {
      diferencas += texto1[i];
    }

    if (texto1[i] != null && texto2[i] != null) {
      if (texto1?.[i] !== texto2?.[i]) {
        diferencas += texto1[i];
        diferencas += texto2[i];
      }
    }
  }
  console.log("DIFERENCAS", diferencas);
  textArea.value += diferencas;
};
