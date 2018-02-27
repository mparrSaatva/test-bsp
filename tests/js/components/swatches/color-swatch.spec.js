import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ColorSwatch from '../../../../src/js/components/swatches/color-swatch';

describe('<ColorSwatch />', () => {

  describe('when rendered', () => {
    test('should display a div', () => {
      const wrapper = shallow(<ColorSwatch/>);
      expect(wrapper.find('div')).to.have.length(1);
    });
  });

});