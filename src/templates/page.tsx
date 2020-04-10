import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Buttons from '../components/buttons';
import Thumbnail from '../components/thumbnail';
import Youtube from '../components/youtube';
import projectDescriptionsYML from '../data/projectDescriptions.yml';

const typedProjectDescriptions: Record<
  string,
  ProjectProp
> = projectDescriptionsYML;

export default function Template(props: any) {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark;

  const project = typedProjectDescriptions[frontmatter.project];

  return (
    <Layout title={frontmatter.title}>
      <div className="container">
        <h1>{frontmatter.title}</h1>
        <article>
          <Thumbnail project={project} />
          <Youtube project={project} />
          <Buttons project={project} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        project
      }
    }
  }
`;
