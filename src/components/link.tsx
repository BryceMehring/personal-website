import React from 'react';
import { Link } from 'gatsby';

interface Props {
  href: string;
  children: any;
  [key: string]: any;
}

export default (props: Props) => {
  const { href, children, ...other } = props;
  if (!href.startsWith('/')) {
    return (
      <a href={href} {...other}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} {...other}>
      {children}
    </Link>
  );
};
