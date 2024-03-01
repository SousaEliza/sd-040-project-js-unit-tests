const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Testar se a função createMenu() retorna um objeto contendo a chave fetchMenu.
    expect(createMenu()).toHaveProperty('fetchMenu');
    // Testar se o objeto retornado pela função possui uma função como valor da chave fetchMenu.
    const objeto = createMenu();
    expect(typeof objeto.fetchMenu).toBe('function');
    // Testar se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.
    expect(createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    }).fetchMenu()).toMatchObject({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    // Testar se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    expect(createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    }).fetchMenu()).toMatchObject({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    // Testar se o objeto retornado pela função createMenu() possui uma chave consumption com o valor de um array vazio.
    expect(createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })).toHaveProperty('consumption');

    const pedido = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    expect(pedido.consumption).toEqual([]);
    // Testar se o objeto retornado pela função createMenu tem a propriedade order, a qual é uma função.
    expect(typeof pedido.order).toBe('function');
    // Testar se a função da propriedade order ao receber como parâmetro um valor não existente no objeto passado para a função createMenu retorna a mensagem 'Item indisponível'    
    expect(pedido.order('café')).toBe('Item indisponível');
    expect(pedido.consumption).toEqual([]);
    // Testar se ao adicionar três pedidos em sequência, o array consumption contém três itens pedidos.
    pedido.order('coxinha');
    expect(pedido.consumption).toEqual(['coxinha']);

    pedido.order('agua');
    expect(pedido.consumption).toEqual(['coxinha', 'agua']);

    pedido.order('sanduiche');
    expect(pedido.consumption).toEqual(['coxinha', 'agua', 'sanduiche']);
    // Testar se a função order aceita que pedidos repetidos sejam acrescidos a consumption.
    pedido.order('sanduiche');
    expect(pedido.consumption).toEqual(['coxinha', 'agua', 'sanduiche', 'sanduiche']);

    // Testar se ao chamar a função pay() - que será uma propriedade do objeto retornado pela função createMenu - ela retorna a soma dos preços de tudo que foi pedido, conforme registrado em consumption.    
    expect(typeof pedido.pay).toBe('function');
    expect(pedido.pay()).toBe(31);
  });
});
