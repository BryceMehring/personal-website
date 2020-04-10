import React from 'react';
import Button from './button';
import { mount } from 'enzyme';

describe('button', () => {
  it('matches snapshot', () => {
    const b = mount(<Button text="Hello" link="test" />);
    expect(b.html()).toMatchSnapshot();
  });
});
