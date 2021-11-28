import { Button } from './button';

interface ButtonsProps {
  links?: {
    text: string;
    link: string;
  }[];
}

export const Buttons = (props: ButtonsProps): JSX.Element => {
  const buttons = props.links?.map((item: any) => {
    return <Button text={item.text} link={item.link} key={item.text} />;
  });

  return <>{buttons}</>;
};
