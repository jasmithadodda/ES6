//Object Literals
//example 1
function createBookStore(inventory) {
  return {
    inventory /*inventory: inventory*/,
    /* no need of function keyword */
    inventoryValue() {
      return this.inventory.reduce(function (total, book) {
        return total + book.price;
      }, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}
let inventory = [
  { title: "Harry Potter", price: 12 },
  { title: "COD", price: 10 },
];
let shop1 = createBookStore(inventory);
console.log(shop1.inventoryValue());
console.log(shop1.priceForTitle("Harry Potter"));

//example 2
function createShoeStore(stocks) {
  return {
    stocks: stocks,
    totalStockPrice: function () {
      return this.stocks.reduce(function (total, stock) {
        return total + stock.price;
      }, 0);
    },
    priceForShoe: function (title) {
      return this.stocks.find((shoe) => shoe.title === title).price;
    },
  };
}
let stocks = [
  { title: "Adidas", price: 12 },
  { title: "Bata", price: 30 },
];
let shoeShop1 = createShoeStore(stocks);
console.log(shoeShop1.totalStockPrice());
console.log(shoeShop1.priceForShoe("Bata"));
