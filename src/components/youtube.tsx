interface YoutubeProps {
  link?: string;
}

export default (props: YoutubeProps): JSX.Element | null => {
  const youtube = props?.link;

  if (!youtube) {
    return null;
  }

  return (
    <div className="col-md-8 col-sm-12">
      <div className="ratio ratio-16x9">
        <iframe
          src={youtube}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
