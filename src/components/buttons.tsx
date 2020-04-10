import React from 'react';
import Button from './button';

interface ButtonsProps {
  project?: ProjectProp;
}

export default (props: ButtonsProps) => {
  const buttons = props.project?.buttons?.map((item: any) => {
    return <Button text={item.text} link={item.link} key={item.text} />;
  });

  return <>{buttons}</>;
};
