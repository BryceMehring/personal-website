import { Link } from './link';
import renderer from 'react-test-renderer';
import { describe, it, vi, expect } from 'vitest';

describe('link', () => {
  it('matches snapshot', () => {
    const wrapper = renderer.create(
      <Link href="test" data-internal-link>
        example
      </Link>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with /', () => {
    const wrapper = renderer.create(
      <Link href="/test" data-external-link>
        example 2
      </Link>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
