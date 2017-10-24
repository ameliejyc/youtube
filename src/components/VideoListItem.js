import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  &:hover {
    background-color: #eee;
  }
`;

const VideoListItem = (props) => {
  const videoTitle = props.video.snippet.title;
  const imageUrl = props.video.snippet.thumbnails.default.url;
  return(
    <ListItem onClick={() => props.onVideoSelect(props.video)}>
    {/* this onvideoselect prop has been made available from app */}
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </ListItem>
  )
}

export default VideoListItem;
