import React from 'react';
import { shallow } from 'enzyme';

import Education from './education';

describe('<Folio />', () => {
  it('render Folio Component', () => {
    const wrapper = shallow((
      <Education educationList={[]}>
      </Education>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});