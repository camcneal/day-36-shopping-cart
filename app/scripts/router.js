import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Cart from './components/cart';

export default(

  <Router history = {hashHistory}>
    <Route path='/' component={Cart} >
    </Route>
  </Router>
);
