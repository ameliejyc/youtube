import React from 'react';
import VideoListItem from './VideoListItem';
import styled from 'styled-components';

const UnorderedList = styled.ul`
  width: auto;
`;

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
    <UnorderedList>
      {videoItems}
    </UnorderedList>
  )
}

export default VideoList;
