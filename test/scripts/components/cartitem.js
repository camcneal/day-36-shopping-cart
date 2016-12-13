import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react';
import Li from '../../../app/scripts/components/cartitem';



describe('cart component' , () => {

        let li;

        beforeEach(() => {
                li = shallow(<Li/>)
        });

        it('should be a li element' , () => {
                expect(li.is('li')).to.equal(true);
        });

        it('should have a button' , () => {
                expect(li.children('button')).to.exist;
        })

        
})
