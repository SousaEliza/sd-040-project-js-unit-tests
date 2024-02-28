const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toBe('function');
    // Teste se productDetails é uma função.
    const resultado1 = productDetails('Alcool gel', 'Máscara');
    expect(resultado1).toEqual([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);
    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se o array retornado pela função contém dois itens dentro.
    const result = productDetails('arroz', 'feijão');
    const verifyIndex = (array) => {
      for (let index = 0; index < array.length; index += 1) {
        if (typeof array[index] === 'object') return true;
      }
    };
    expect(verifyIndex(result)).toBeTruthy();
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const paramEqual = productDetails('arroz', 'arroz');
    const paramDiff = productDetails('arroz', 'feijão');
    expect(paramEqual[0]).toEqual(paramEqual[1]);
    expect(paramDiff[0]).not.toEqual(paramDiff[1]);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const checkId = productDetails('arroz', 'feijão');
    expect(checkId[0].details.productId).toMatch(/123/);
    expect(checkId[1].details.productId).toMatch(/123/);
    // Teste se os dois productIds terminam com 123.
  });
});
