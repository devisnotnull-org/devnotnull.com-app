import React from 'react';
import { render } from '@testing-library/react';

import Contact from './contact';

describe('<Folio />', () => {
  it('render Folio Component', () => {
    const wrapper = render(<Contact contactList={[]}></Contact>);
    expect(wrapper).toMatchSnapshot();
  });
});
