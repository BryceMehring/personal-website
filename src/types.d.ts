declare module '*.yml';
declare module '*.scss';

declare interface ButtonProps {
  text: string;
  link: string;
}

declare interface ProjectButton {
  text: string;
  link: string;
}

declare interface ProjectImage {
  showOnMain?: boolean;
  alt: string;
  source: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
    };
  };
}

declare interface ProjectProp {
  id: string;
  title: string;
  description: string;
  position: string;
  shortTitle?: string;
  youtube?: string;
  buttons?: ProjectButton[];
  image: ProjectImage;
}
