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
    // console.log('newTotal', this.get('total'));
  },
  addItem: function(name,price) {
      let newItem = {name: name, price:price};
      // console.log('newItem', newItem);
      let newCart = this.get('cartItems').concat(newItem);
      // console.log('newCart', newCart);
      this.calcPrice(price);
      this.set('cartItems', newCart);
  },
  removeItem: function(name, price) {
    let oldItem = {name: name, price:price};
      let newCart = _.without(this.get('cartItems'), oldItem);
      price = price * -1;
      this.calcPrice(price);
      this.set('cartItems', newCart);
  },
});
