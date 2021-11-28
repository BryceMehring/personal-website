interface YoutubeProps {
  link?: string;
}

export default (props: YoutubeProps): JSX.Element | null => {
  const youtube = props?.link;

  if (!youtube) {
    return null;
  }

  return (
    <iframe
      width="560"
      height="315"
      src={youtube}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
