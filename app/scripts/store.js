import React from 'react';
import Cart from './model/CartModel';

export default {
    items:  [{

            name: 'skateboard',
            price: 14,
            }, {

            name: 'basketball',
            price: 8,
            }, {

            name: 'football',
            price: 6,

            }, {
            name: 'soccerball',
            price:  4

    }],
    cartModel: new Cart(),
};
