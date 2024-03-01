/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
  const menu = { // variável que armazena o retorno da função
    order: (str) => { // propriedade é função, que recebe uma string como parâmetro
      if (object.food[str] || object.drinks[str]) { // verifica se temos no cardápio o item solicitado
        menu.consumption.push(str); // sendo positivo armazeno como valor no array
      } else {
        return 'Item indisponível'; // se não entrar na condição retornamos a mensagem
      }      
    },
    fetchMenu: () => object, // devolve o cardápio
    consumption: [], // armazena os pedidos 
    pay: () => menu.consumption.reduce((sum, consume) => { // percorre o array 
      if (object.food[consume]) { // verifica se a propriedade existe, se sim, armazeno o valor em sum
        sum += object.food[consume]; 
      } else if (object.drinks[consume]) { 
        sum += object.drinks[consume]; 
      } 
      const total = Math.floor(sum * 1.1);
      return total; 
    }, 0),
  };
  return menu;
};

module.exports = createMenu;