export const runTestSuite = (tests) => {
  let totalTests = 0;
  let failedTests = 0;
  console.assert = (flag, message) => {
    totalTests++;
    if (!flag) {
      console.log(message);
      failedTests++;
    }
  };

  console.log("\n\n---------- Iniciando Testes ----------");

  const sum = tests.get("sum");
  const ispair = tests.get("ispair");
  const highernum = tests.get("highernum");
  const toUppercasePhrase = tests.get("toUppercasePhrase");

  console.assert(sum != null, "Função sum não existe ");
  console.assert(ispair != null, "Função ispair não existe ");
  console.assert(highernum != null, "Função highernum, não existe ");
  console.assert(
    toUppercasePhrase != null,
    "Função toUppercasePhrase não existe "
  );

  console.assert(sum(1, 2) === 3, "Função sum é invalida");

  console.assert(
    ispair(1) === false,
    "Função ispair não valida numeros impares"
  );
  console.assert(ispair(2) === true, "Função ispair não valida numeros pares");

  console.assert(
    highernum([1, 2, 3]) === 3,
    "Função highernum não retorna o maior número"
  );

  console.assert(
    highernum([4, 1, 2, 3]) === 4,
    "Função highernum não retorna o maior número"
  );

  console.assert(
    toUppercasePhrase("aTssnenenN") === "ATSSNENENN",
    "Função highernum não retorna o maior número"
  );

  if (0 === failedTests) {
    console.log(`✅ test suite passed! ${totalTests} test passed`);
  } else {
    console.log(
      `❌ test suite failed. ${failedTests}/${totalTests} tests failed`
    );
  }
};
