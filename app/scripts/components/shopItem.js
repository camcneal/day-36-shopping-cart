import React from 'react';
import store from '../store';


export default React.createClass({
  addItem () {
    store.cartModel.addItem(this.props.name, this.props.price);
  },
  render () {
    return(
          <li>
            {this.props.name} ${this.props.price}
            <button onClick={this.addItem}>add</button>

          </li>
    );
  }
});
