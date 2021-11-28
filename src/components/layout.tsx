import PropTypes from 'prop-types';
import { Header } from './header';
import { SEO } from './seo';
import { Footer } from './footer';

import '../style.scss';

interface Props {
  title?: string;
  children: any;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <SEO title={title} />
      <div className="container-fluid pt-3 pb-5">
        <Header pageTitle={title} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
