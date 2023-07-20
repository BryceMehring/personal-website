import { Button } from './button';
import renderer from 'react-test-renderer';
import { describe, it, expect } from 'vitest';

describe('button', () => {
  it('matches snapshot', () => {
    const wrapper = renderer.create(<Button text="Hello" link="test" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
