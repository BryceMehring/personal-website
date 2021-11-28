import { Link } from './link';

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <Link className="btn btn-primary m-3" href={props.link}>
      {props.text}
    </Link>
  );
};
