import React from 'react';

interface ThumbnailProps {
  project?: ProjectProp;
}

export default (props: ThumbnailProps) => {
  const images = props.project?.images;

  if (!images || !images.image || !images.thumbnail) {
    return null;
  }

  return (
    <p>
      <a href={images.image}>
        <img className="img-fluid" src={images.thumbnail} alt={images.alt} />
      </a>
    </p>
  );
};
