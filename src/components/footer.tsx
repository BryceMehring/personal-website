import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon, faGithub, faEnvelope } from './icons';

export const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
            github
          }
        }
      }
    `
  );
  const { email, github } = site.siteMetadata;
  return (
    <footer className="container footer">
      <ul>
        <li>
          <a href={github}>
            <FontAwesomeIcon icon={faGithub} size="1x" />
            Github
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            {email}
          </a>
        </li>
      </ul>
    </footer>
  );
};
