const ShoppingBasket = require("./shoppingbasket")
const basket = new ShoppingBasket()
const candyDouble = { price: 3.99}; 

describe('ShoppingBasket', ()=> {
  it('instantiates a shopping basket object', () => {
    expect(basket).toBeInstanceOf(ShoppingBasket)
  });
  describe('addItem', ()=>{
    expect(basket.candies.length).toBe(0)
    basket.addItem(candyDouble)
    expect(basket.candies.length).toBe(1)
  })
  describe('getTotalPrice', ()=>{
    basket.addItem(candyDouble)
    expect(basket.getTotalPrice()).toBe((3.99+3.99))
  })
})