import React from 'react';

const DetailVideo = ({video}) => {

  if (!video) {
    return <h3>Loading...</h3>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title={videoId} src={url}></iframe>
      </div>
      <div className="details">
        <div>
          <h2>
            {video.snippet.title}
          </h2>
        </div>
        <div>
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
}

export default DetailVideo;
