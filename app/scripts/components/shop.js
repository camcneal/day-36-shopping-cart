import React from 'react';
import Backbone from 'backbone';
import store from '../store';

export default React.createClass({

  addItem (e) {
    if(e.target.textContent === [0] )
    console.log('hi');
  }
  render () {
    console.log(store.items[0].name);
    return(
          <ul className="shop">Items
          <li onClick={this.addItem}>${store.items[0].name}{store.items[0].price}</li>
          <li>{store.items[1].name}{store.items[1].price}</li>
          <li>{store.items[2].name}{store.items[2].price}</li>
          <li>{store.items[3].name}{store.items[3].price}</li>
          </ul>
    )
  }
});
