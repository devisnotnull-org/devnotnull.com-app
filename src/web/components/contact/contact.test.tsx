import React from 'react';
import { shallow } from 'enzyme';

import Contact from './contact';

describe('<Folio />', () => {
  it('render Folio Component', () => {
    const wrapper = shallow((
      <Contact contactList={[]}>
      </Contact>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});