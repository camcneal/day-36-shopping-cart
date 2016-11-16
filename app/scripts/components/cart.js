import React from 'react';
import store from '../store';
import CartItems from './cartitem';
import ShopItems from './shopitem';

export default React.createClass({
  // removeItem (name, price) {
  //   store.cartModel.removeItem(name, price);
  // },

  render () {
    let cartItems;
    // console.log(this.props);
    if (this.props.items) {
      cartItems = this.props.items.map( (items,i,arr) => {
        // console.log(items);
        let name = items.name;
        let price = items.price;
        return <CartItems name={items.name} key={i} price={items.price}/>;
      });
    }

    return(
        <div>
          <h3>Your items</h3>
          <ul>
            {cartItems}
          </ul>
          <p>Total: ${this.props.total}</p>
        </div>
    );
  }
});
