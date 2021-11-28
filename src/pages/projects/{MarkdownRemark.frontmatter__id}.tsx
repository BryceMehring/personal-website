import { graphql } from 'gatsby';
import { Layout } from '../../components/layout';
import { Buttons } from '../../components/buttons';
import Thumbnail from '../../components/thumbnail';
import Youtube from '../../components/youtube';

export default function Template(props: any): JSX.Element {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark;

  let body;

  if (html) {
    body = <div dangerouslySetInnerHTML={{ __html: html }} />;
  } else {
    body = (
      <>
        <h2>Description</h2>
        <p>{frontmatter.description}</p>
      </>
    );
  }

  return (
    <Layout title={frontmatter.title}>
      <div className="container">
        <h1>{frontmatter.title}</h1>
        <article>
          <Thumbnail {...frontmatter.image} />
          <Youtube link={frontmatter.youtube} />
          <Buttons links={frontmatter.buttons} />
          {body}
        </article>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        youtube
        buttons {
          link
          text
        }
        image {
          alt
          showOnMain
          source {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
