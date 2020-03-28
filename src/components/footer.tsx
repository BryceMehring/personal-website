import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
    <footer className="site-footer">
      <ul className="contact-list">
        <li>
          <a href={github}>
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            {email}
          </a>
        </li>
      </ul>
    </footer>
  );
};
