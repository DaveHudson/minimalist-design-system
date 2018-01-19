import React from 'react';
import renderer from 'react-test-renderer';

import HeaderText from './HeaderText';

describe('HEADER TEXT', () => {
  it('Renders with DefaultProps', () => {
    const component = renderer
      .create(<HeaderText />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
