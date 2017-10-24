import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { API_KEY } from '../../config.env';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [],
    selectedVideo: null };

    this.videoSearch('mariah carey');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => { this.setState({
      videos: videos,
      selectedVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400)
    const Title = styled.h1`
      font-size: 2.5em;
      color: purple;
    `;
    return (
      <div>
        <Title>Amelietube</Title>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        // onVideoSelect function is saying that if this function is called with a video, the selected video will update on app's state
        videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
