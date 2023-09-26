export const runTestSuite = (suites = {}) => {
  let totalTests = 0;
  let failedTests = 0;
  let extraTests = 0;
  let failedExtraTests = 0;
  let textoFailedExtra = [];

  console.assert = (flag, message, extra = false) => {
    if (extra) {
      extraTests++;
      if (flag) {
        textoFailedExtra.push(message);
        failedExtraTests++;
      }
      return;
    }

    totalTests++;
    if (flag) {
      console.log(message);
      failedTests++;
    }
  };

  console.log(`\n\n---------- Iniciando Testes----------`);
  console.assert(suites.anoAtual == null, "1- Ano atual nao existe");
  console.assert(suites.anoAtual !== "2023", "1- Valor do ano atual errado");

  console.assert(suites.numeros == null, "2- Array de numeros nao existe");
  console.assert(
    Array.isArray(suites.numeros) !== true,
    "2- Array de numeros nao e um array"
  );

  if (Array.isArray(suites.numeros)) {
    let nums = 0;

    for (let i = 0; i < suites.numeros.length; i++) {
      if (typeof suites.numeros[i] != "number") nums++;
    }

    console.assert(nums > 0, "2- Array de numeros nao possui so numeros");
  } else {
    totalTests++;
    failedTests++;
  }

  console.assert(suites.pessoa == null, "3- Pessoa nao existe");

  if (typeof suites.pessoa == "object" && suites.pessoa != null) {
    console.assert(
      typeof suites.pessoa !== "object",
      "3- Pessoa nao e um objeto"
    );
  } else {
    totalTests++;
    failedTests++;
  }

  console.assert(
    typeof suites?.pessoa?.nome == "undefined" ||
      typeof suites?.pessoa?.idade == "undefined",
    "3- Propriedades nao definidas no objeto pessoa"
  );

  console.assert(suites.frutas == null, "4- Array de frutas nao existe");

  if (Array.isArray(suites.frutas)) {
    let nums = 0;

    for (let i = 0; i < suites.frutas.length; i++) {
      if (typeof suites.frutas[i] != "string") nums++;
    }

    console.assert(nums > 0, "4- Array de frutas nao possui so texto");
  } else {
    totalTests++;
    failedTests++;
    console.log("4- Array de frutas nao e um array");
  }

  console.assert(
    suites.numaleatorio == null,
    "5- Funcao gerarNumeroAleatorio nao existe",
    true
  );
  console.assert(
    typeof suites.numaleatorio != "function",
    "5- gerarNumeroAleatorio nao e definido como uma funcao",
    true
  );

  if (typeof suites.numaleatorio == "function") {
    function checkNum() {
      const getNum = suites.numaleatorio(1, 3);
      if (getNum >= 0 && getNum <= 4) {
        return false;
      } else {
        return true;
      }
    }

    console.assert(
      checkNum(),
      "5- gerarNumeroAleatorio nao esta gerando numeros entre o minimo e maximo",
      true
    );
  }

  if (0 === failedTests) {
    console.log(`✅ test suite passed! ${totalTests} test passed`);
  } else {
    console.log(
      `❌ test suite failed. ${failedTests}/${totalTests} tests failed`
    );
  }

  console.log("------------EXERCICIO EXTRA------------");

  if (0 === failedExtraTests) {
    console.log(`✅ test suite passed! ${extraTests} test passed`);
  } else {
    for (let i = 0; i < textoFailedExtra.length; i++) {
      console.log(textoFailedExtra[i]);
    }
    console.log(
      `❌ Extra test suite failed. ${failedExtraTests}/${extraTests} tests failed`
    );
  }
};
