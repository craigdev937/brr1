var cart = [];
var Item = function(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
};

addItemToCart(name, price, count);
removeItemFromCart(name);

// var wshirt = new Item("WT-shirt", 25.00, 1);

// cart.push( new Item("BT-shirt", 25.00, 1));
// cart.push(wshirt);
// console.log(cart);

