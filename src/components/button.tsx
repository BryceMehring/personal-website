import React from "react";
import Link from "./link";

interface Props {
  text: string;
  link: string;
}

export default (props: Props) => {
  return (
    <Link className="btn btn-primary m-3" href={props.link}>
      {props.text}
    </Link>
  );
};
