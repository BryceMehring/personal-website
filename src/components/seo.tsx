/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title?: string;
}

export const SEO = ({ title }: Props): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = site.siteMetadata.description;
  let siteTitle = site.siteMetadata.title;

  if (title) {
    siteTitle += ` - ${title}`;
  }

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={siteTitle} />
    </>
  );
};
