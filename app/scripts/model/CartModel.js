import Backbone from 'backbone';
import _ from 'underscore';

export default Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    cartItems: [],
    inCart: false,
    total: 0
  },
  calcPrice: function(price) {
    // console.log('price', price);
    let oldPrice = this.get('total');
    let newPrice = oldPrice + price;
    this.set('total', newPrice);
  },
  addItem: function(name,price) {
      let newItem = {name: name, price:price};
      // console.log('newItem', newItem);
      let newCart = this.get('cartItems').concat(newItem);
      // console.log('newCart', newCart);
      this.set('cartItems', newCart);
      this.calcPrice(price);

  },
  removeItem: function(name, price) {
    this.get('cartItems').map((item, i) => {
      if (name === item.name) {
        this.get('cartItems').splice(i, 1);
        // this.set('cartItems', newItems);
      }
    });
    price = price * -1;
    this.calcPrice(price);
  },
});
