import React from 'react';
import ReactDom from 'react-dom';
// import Backbone from 'backbone';
import router from './router';
// import cart from './components/cart';
// import $ from 'jquery';

const container = document.getElementById('container');

ReactDom.render(router, container);
