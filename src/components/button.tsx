import React from 'react';
import Link from './link';

export default (props: ButtonProps) => {
  return (
    <Link className="btn btn-primary m-3" href={props.link}>
      {props.text}
    </Link>
  );
};
