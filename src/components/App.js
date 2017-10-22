import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { API_KEY } from '../../config.env';

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
    // this function can only be run once every 400ms
    return (
      <div>
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
