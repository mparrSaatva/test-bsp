import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SaatvaButton from '../../../../src/js/components/buttons/saatva-button';

describe('<SaatvaButton />', () => {

    describe('when rendered', () => {
        test('should display a button', () => {
            const wrapper = shallow(<SaatvaButton buttonText={'This is my button'} />);
            expect(wrapper.find('button')).to.have.length(1);
        });
    });

    describe('when passed an additional CSS class', () => {
        test('should have the new CSS class', () => {
            const wrapper = shallow(<SaatvaButton buttonText={'This is my button'} addlCssClass={'my-class'} />);
            expect(wrapper.hasClass('my-class')).to.equal(true);
        });
    });

    describe('when passed button text', () => {
        test('should display the correct text', () => {
            const wrapper = shallow(<SaatvaButton buttonText={'This is my button'} />);
            expect(wrapper.html()).to.contain('This is my button');
        });
    });

    describe('when passed a eventHandler', () => {
        test('should execute eventHandler', () => {
            const eventHandlerSpy = sinon.spy();
            const wrapper = shallow(<SaatvaButton buttonText={'This is my button'} eventHandler={ eventHandlerSpy } />);
            wrapper.simulate('click');
            expect(eventHandlerSpy.calledOnce).to.be.true;
        });
    });
});