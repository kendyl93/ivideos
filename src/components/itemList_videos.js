import React from 'react';

const ItemListVideos = ({ video, onVideoSelect }) => {
  const thumbnailURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={thumbnailURL} className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemListVideos;
