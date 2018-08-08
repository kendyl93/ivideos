import React from 'react';
import ItemListVideos from './itemList_videos';

const ListVideos = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
      <ItemListVideos
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  return(
    <div className="col-sm-4 list_videos_wrapper">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  );
}

export default ListVideos;
