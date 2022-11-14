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
    <div className="col-sm-12 col-md-4 col-xl-3 card text-bg-light p-3 m-3 shadow text-center project">
      <div className="thumbnail">
        <Link href={link}>
          <GatsbyImage
            image={image.source.childImageSharp.gatsbyImageData}
            alt={image.alt}
            loading="eager"
          />
        </Link>
      </div>

      <div className="card-body">
        <h3 className="card-title">
          <Link href={link}>{shortTitle || title}</Link>
        </h3>
        <div className="card-text">
          <p>{description}</p>
          <p>
            <b>Position</b>: {position}
          </p>
        </div>
      </div>
    </div>
  );
};
