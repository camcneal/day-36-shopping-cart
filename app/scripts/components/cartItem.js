import React from 'react';
import store from '../store';


export default React.createClass({
  addItem (e) {
    // console.log(this.props.name);
    // console.log(this.props.price);
    // if(e.target. === [0] )
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
