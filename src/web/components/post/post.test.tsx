import React from 'react';
import { render } from '@testing-library/react';

import Post from './post';

describe('<Post />', () => {
  it('render Post Component', () => {
    const wrapper = render(
      <Post
        metadata={{
          title: '',
          summary: '',
          blurb: '',
          favicon: {},
          primaryImage: {},
          secondaryImage: {}
        }}
      ></Post>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
