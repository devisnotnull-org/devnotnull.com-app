import React from 'react';
import { shallow } from 'enzyme';

import Folio from './folio';

describe('<Folio />', () => {
  it('render Folio Component', () => {
    const wrapper = shallow((
      <Folio >
      </Folio>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});