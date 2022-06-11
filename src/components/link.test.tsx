import { Link } from './link';
import renderer from 'react-test-renderer';
import { Link as GatsbyLink } from 'gatsby';

jest.mock('gatsby', () => ({
  Link: jest.fn(() => (
    <a href="somewhere" className="mockedLink">
      mock
    </a>
  )),
}));

describe('link', () => {
  it('matches snapshot', () => {
    const wrapper = renderer.create(<Link href="test">example</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
    expect(GatsbyLink).not.toHaveBeenCalled();
  });

  it('matches snapshot with /', () => {
    const wrapper = renderer.create(<Link href="/test">example 2</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
    expect(GatsbyLink).toHaveBeenCalled();
  });
});
