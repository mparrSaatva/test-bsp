import React from 'react'
import { shallow, mount, render } from 'enzyme'
import HelloWorld from './'

describe('when HelloWorld passed an additional CSS class', () => {
    test('should have the new CSS class', () => {
        const wrapper = mount(<HelloWorld cssClass="my-class" />)
        expect(wrapper.find('.helloWorld').hasClass('my-class')).toEqual(true)
    })
})

describe('when HelloWorld passed custom message', () => {
    test('should display the correct text', () => {
        const wrapper = shallow(<HelloWorld message="my-message" />)
        const customMessage = wrapper.text()

        expect(customMessage).toEqual('Hello, my-message')

    })
})