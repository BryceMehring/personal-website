/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import SEO from './seo';
import Footer from './footer';

import '../style.scss';

interface Props {
  title?: string;
  children: any;
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Header pageTitle={title} />
      <SEO title={title} />
      <div className="container-fluid pt-3 pb-5">
        <main>{children}</main>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
