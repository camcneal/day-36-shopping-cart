import Cart from '../../../app/scripts/model/CartModel';
import Backbone from 'backbone';
import sinon from 'sinon';
import { expect } from 'chai';


let cart;
beforeEach(() => {
          cart = new Cart();
});

describe('cart model', () => {
  it('should be a function', () => {
          expect(Cart).to.be.a('function');
  })


it('should create an backbone model' , () => {
          expect(cart).to.be.an.instanceof(Backbone.Model);
});

it('should have an attribute id of objectId' , () => {
          expect(cart).to.have.property('idAttribute');
          expect(cart.idAttribute).to.equal('id');
});

it('should have a default price of 0' , () => {
          expect(cart.get('total')).to.be.a('number');
          expect(cart.get('total')).to.equal(0);
});

it('should fire a change when addItem is called' , () => {
          let spy = sinon.spy();
          // let basketball = 'basketball';
          cart.on('change' , spy);
          cart.addItem();
          expect(spy.callCount).to.equal(2);

});

it('should fire a change when removeItem is called' , () => {
          let spy = sinon.spy();
          cart.on('change', spy);
          cart.removeItem();
          expect(spy.callCount).to.equal(1);
});

it('should have item in cart if card addItem is used' , () => {
          cart.addItem('skateboard' , 14);
          expect(cart.get('cartItems')).to.deep.equal([{name: 'skateboard',
          price: 14,}]);
});

it('cart should display correct number of items' , () => {
        cart.addItem('skateboard' , 14);
        cart.addItem('basketball' , 8);
        console.log(cart.get('cartItems'));
        expect(cart.get('cartItems')).to.have.length(2)

})

it('cart should display correct total' , () => {
        cart.addItem('skateboard' , 14);
        cart.addItem('basketball' , 8);
        expect(cart.get('total')).to.equal(22)

})

it('cart should display correct total after item is removed' , () => {
        cart.addItem('skateboard' , 14);
        cart.addItem('basketball' , 8);
        cart.removeItem('skateboard' , 14);
        expect(cart.get('total')).to.equal(8)

})

});
