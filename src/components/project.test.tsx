import renderer from 'react-test-renderer';
import { Project } from './project';

describe('project', () => {
  it('matches snapshot', () => {
    const image: any = {
      source: {
        childImageSharp: {
          gatsbyImageData: {
            layout: 'constrained',
            backgroundColor: '#080808',
            images: {
              fallback: {
                src: '/static/e82c1/hexel.jpg',
                srcSet:
                  '/static/8710f/hexel.jpg 128w,\n/static/0ee4a/hexel.jpg 256w,\n/static/e82c1/hexel.jpg 512w',
                sizes: '(min-width: 512px) 512px, 100vw',
              },
              sources: [
                {
                  srcSet:
                    '/static/6efab/hexel.webp 128w,\n/static/20b45/hexel.webp 256w,\n/static/5999d/hexel.webp 512w',
                  type: 'image/webp',
                  sizes: '(min-width: 512px) 512px, 100vw',
                },
              ],
            },
            width: 512,
            height: 384,
          },
        },
      },
      alt: 'alt',
    };
    const wrapper = renderer.create(
      <Project
        id="test"
        title="name"
        description="short"
        position="pos"
        image={image}
      />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
