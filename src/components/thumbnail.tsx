import { GatsbyImage } from 'gatsby-plugin-image';

export default (props: ProjectImage): JSX.Element | null => {
  if (!props.showOnMain) {
    return null;
  }

  return (
    <div className="col-10">
      <GatsbyImage
        image={props.source.childImageSharp.gatsbyImageData}
        alt={props.alt}
      />
    </div>
  );
};
