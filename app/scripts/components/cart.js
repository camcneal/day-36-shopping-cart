import React from 'react';
import store from '../store';

export default React.createClass({
  removeItem (name, price) {
    store.cartModel.removeItem(name, price);
  },

  render () {
    let cartItems;
    if (this.props.items.length) {
      cartItems = this.props.items.map( (items,i,arr) => {
        // console.log(items);
        let name = items.name;
        let price = items.price;
        return (<li key={i} >{items.name} ${items.price} <button onClick={this.removeItem.bind(null, name, price)}>remove</button> </li>);
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
