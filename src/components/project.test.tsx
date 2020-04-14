import React from 'react';
import renderer from 'react-test-renderer';
import Project from './project';

describe('project', () => {
  it('matches snapshot', () => {
    const wrapper = renderer.create(
      <Project 
        name="name"
        shortDescription="short"
        position="pos"
        link="link"
        images={{
          thumbnail: 'thumbnail',
          alt: 'alt',
        }}
      />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})