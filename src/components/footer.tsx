import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default () => {
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
    <footer className="container site-footer">
      <ul className="contact-list">
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
