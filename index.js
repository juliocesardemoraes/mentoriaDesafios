const myHeaders = new Headers();

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://api.api-ninjas.com/v1/jokes?limit=10", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

const buscarPiadas = async () => {
  const piadas = await fetch(
    "https://api.api-ninjas.com/v1/jokes?limit=10",
    requestOptions
  );
  const piadasJson = await piadas.json();

  const jokesUl = document.getElementById("jokes");
  for (let i = 0; i < piadasJson.length; i++) {
    const jokeLi = document.createElement("li");
    jokeLi.innerText = piadasJson[i].joke;
    jokesUl.append(jokeLi);
  }
};
