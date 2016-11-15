import React from 'react';
import store from '../store';

export default React.createClass({
  render () {
    let cartItems;
    console.log(this.props.items.length > 0);
    if (this.props.items.length > 0) {
      cartItems = this.props.items.map( (items,i,arr) => {
        console.log(items);

        return (<li>{items.name} {items.price} </li>);
      });
    }

    return(
        <ul>
          {cartItems}
        </ul>
    );
  }
});
