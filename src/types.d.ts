declare module '*.yml';

declare interface ProjectButton {
  text: string;
  link: string;
}

declare interface ProjectProp {
  name: string;
  shortDescription: string;
  position: string;
  link: string;
  youtube?: string;
  buttons?: ProjectButton[];
  images: {
    thumbnail: string;
    image?: string;
    alt: string;
  }
}