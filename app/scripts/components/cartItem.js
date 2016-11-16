import React from 'react';
import store from '../store';
import Cart from './cart';

export default React.createClass({
  removeItem (name, price) {
    console.log('name', this.props.name);
    console.log('price', this.props.price);
    store.cartModel.removeItem(this.props.name, this.props.price);
  },
  render () {
          let name = this.props.name;
          let price = this.props.price;
          return (
            <li>{this.props.name} ${this.props.price}
              <button onClick={this.removeItem}>remove</button>
            </li>);
      },
    });
