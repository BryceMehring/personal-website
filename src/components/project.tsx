import { Link } from './link';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Project = ({
  id,
  image,
  title,
  shortTitle,
  position,
  description,
}: ProjectProp): JSX.Element => {
  const link = `/projects/${id}`;
  return (
    <div className="col-sm-12 col-md-4 col-xl-3 p-3 m-3 border shadow rounded project">
      <div className="text-center">
        <h3>
          <Link href={link}>{shortTitle || title}</Link>
        </h3>
        <p>{description}</p>
        <p>
          <b>Position</b>: {position}
        </p>
      </div>
      <div className="thumbnail">
        <Link href={link}>
          <GatsbyImage
            image={image.source.childImageSharp.gatsbyImageData}
            alt={image.alt}
            className="image"
            loading="eager"
          />
        </Link>
      </div>
    </div>
  );
};
