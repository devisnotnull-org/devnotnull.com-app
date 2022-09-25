import React from 'react';
import { render } from '@testing-library/react';

import Experiance from './experiance';

describe('<Folio />', () => {
  it('render Folio Component', () => {
    const wrapper = render(<Experiance experianceList={[]}></Experiance>);
    expect(wrapper).toMatchSnapshot();
  });
});
