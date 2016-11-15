import React from 'react';
import store from '../store';
import CartItem from './cartItem';
import Cart from './cart';

export default React.createClass({
  getInitialState() {
    return {
      // cartPreview: store.cartModel.get('inCart'),
      items: store.cartModel.get('cartItems'),
    }
  },

  updateState () {
    this.setState({items: store.cartModel.get('cartItems')});
  },
  componentDidMount () {
    store.cartModel.on('change update', this.updateState)
  },


  render () {
    // console.log(store.items[0].name);
    let cartItems = store.items.map( (items,i,arr) => {
      return (<CartItem name={items.name} key={i} price={items.price}/>);
    });

    return(
        <div className="shop-container">
          <ul className="shop">
            <h3>Items</h3>
            {cartItems}
          </ul>
          <Cart items={this.state.items}/>
        </div>
    );
  }
});
