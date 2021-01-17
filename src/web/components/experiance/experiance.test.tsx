import React from 'react';
import { shallow } from 'enzyme';

import Experiance from './experiance';

describe('<Folio />', () => {
  it('render Folio Component', () => {
    const wrapper = shallow(<Experiance experianceList={[]}></Experiance>);
    expect(wrapper).toMatchSnapshot();
  });
});
