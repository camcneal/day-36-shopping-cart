import React from 'react';
import store from '../store';
import Cart from './cart';

export default React.createClass({
  removeItem (name, price) {
    store.cartModel.removeItem(name, price);
  },
  render () {
    console.log(this.props.name);
          let name = this.props.name;
          let price = this.props.price;
          return (<li >{this.props.name} ${this.props.price}
            <button onClick={this.removeItem}>remove</button> </li>);
      },
    });
