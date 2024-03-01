const VideoLecture = ({ lectureId }) => {
    return (
      <div className="video-lecture">
        {/* Replace with your actual embedded video or video player component */}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${lectureId}`}
          title="Video lecture"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  export default VideoLecture;
  