class ShoppingBasket {
  constructor(){
    this.candies = []
    this.total = 0
  }

  addItem(candy){
    this.candies.push(candy)
  }

  getTotalPrice(){
    this.candies.forEach(x => this.total += x.price)
    return this.total
  }
}

module.exports = ShoppingBasket