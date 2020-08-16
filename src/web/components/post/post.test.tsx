import React from 'react';
import { shallow } from 'enzyme';

import Post from './postBlurb';

describe('<Post />', () => {
  it('render Post Component', () => {
    const wrapper = shallow((
      <Post metadata={{title: '', summary: '', blurb: '', favicon: {}, primaryImage: {}, secondaryImage: {}}}>
      </Post>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});