import React from 'react';

interface YoutubeProps {
  project?: ProjectProp;
}

export default (props: YoutubeProps) => {
  const youtube = props.project?.youtube;

  if (!youtube) {
    return null;
  }

  return (
    <iframe
      width="560"
      height="315"
      src={youtube}
      frameBorder="0"
      allowFullScreen
    />
  );
};
