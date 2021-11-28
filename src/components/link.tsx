import { Link as GatsbyLink } from 'gatsby';

interface Props {
  href: string;
  children: any;
  [key: string]: any;
}

export const Link = (props: Props): JSX.Element => {
  const { href, children, ...other } = props;
  if (!href.startsWith('/')) {
    return (
      <a href={href} {...other}>
        {children}
      </a>
    );
  }
  return (
    <GatsbyLink to={href} {...other}>
      {children}
    </GatsbyLink>
  );
};
