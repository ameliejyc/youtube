import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  // props has to be passed in here as it is a functional component. if it was class-based it could be passed in anywhere in the render as this.props

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      // this prop came from app and we've passed it down to videolistitem
      key={video.etag}
      video={video} />
    )
  })

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
