import React from 'react';
import { shallow } from 'enzyme';

import Skillz from './skillz';

describe('<Skillz />', () => {
  it('render Skillz Component', () => {
    const wrapper = shallow((
      <Skillz abilitiesList={[]}>
      </Skillz>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});