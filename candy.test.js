const Candy = require('./candy')
const candy = new Candy("Mars", 4.99)

describe('Candy', ()=> {
  it('instantiates a candy object', () => {
    expect(candy).toBeInstanceOf(Candy)
  });

  describe('getName', ()=> {
    it('returns the name of the candy', () => {
      expect(typeof(candy.getName()) == 'string').toBe(true)
  });
  });

  describe('getPrice', ()=> {
    it('returns the price of the candy', () => {
      expect(candy.getPrice()).toBe(4.99)
  });
  });
})