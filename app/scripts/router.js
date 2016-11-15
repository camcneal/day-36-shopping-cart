import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Shop from './components/shop';

export default(

  <Router history = {hashHistory}>
    <Route path='/' component={Shop} />
  </Router>
);
