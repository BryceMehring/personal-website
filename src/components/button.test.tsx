import { Button } from './button';
import renderer from 'react-test-renderer';

describe('button', () => {
  it('matches snapshot', () => {
    const wrapper = renderer.create(<Button text="Hello" link="test" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
