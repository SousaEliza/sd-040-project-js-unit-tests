/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.every(Number.isFinite)) {
    // Somar todos os números no array
    let soma = arr.reduce((total, numero) => total + numero, 0);

    // Dividir a soma pelo número de elementos no array
    const media = soma / arr.length;

    return Math.round(media);
  }
};

module.exports = average;
