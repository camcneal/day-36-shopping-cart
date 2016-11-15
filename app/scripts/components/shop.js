import React from 'react';
import store from '../store';
import CartItem from './cartItem';

export default React.createClass({
  getInitialState() {
    return {
      // cartPreview: store.cartModel.get('inCart'),
    }
  },

  updateState () {
    // this.setState({cartPreview: store.cartModel.get('inCart')});
  },
  componentDidMount () {
    // store.cartModel.on('change', updateState)
  },


  render () {
    // console.log(store.items[0].name);
    let cartItems = store.items.map( (items,i,arr) => {
      return (<CartItem name={items.name} key={i} price={items.price}/>);
    });

    return(
          <ul className="shop">
            <h3>Items</h3>
            {cartItems}
          </ul>
    );
  }
});
