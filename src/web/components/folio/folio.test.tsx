import React from 'react';
import { render } from '@testing-library/react';

import Folio from './folio';

describe('<Folio />', () => {
  it('render Folio Component', () => {
    const wrapper = render(<Folio></Folio>);
    expect(wrapper).toMatchSnapshot();
  });
});
