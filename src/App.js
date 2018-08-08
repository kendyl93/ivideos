import React, { Component } from 'react';

import YT_Search from 'youtube-api-search';
//Components
import SearchBar from './components/search_bar';
import ListVideos from './components/list_videos';
import DetailVideo from './components/detail_video';
// CSS and the rest
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './pawel_stanecki.svg';
import react_logo from './logo.svg';
import bootstrap_logo from './bootstrap-stack.png';
import './App.css';

///API
const API_KEY = 'AIzaSyDRUDzbS9SCNUJESXebhfkFNblmpMjGbTQ';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('football');
  }

  videoSearch(term){
    // Youtube mechanism
    YT_Search({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main relative">
        <img src={bootstrap_logo} className="bg-img bg-bootstrap" alt="bootstrap" />
        <img src={react_logo} className="bg-img bg-react" alt="react" />
          <div className="container text">
            <div className="row">
              <h1 id="mainHeader" className="text-center marginBottom">iVideos<br/><small>videos from YouTube</small></h1>
              <p>Search for videos typing some text inside an input and choose one from the list on the right hand side.</p>
              <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            </div>
            <div className="row">
            <div className="col-sm-8">
              <DetailVideo video={this.state.selectedVideo}/>
            </div>
              <ListVideos
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
          </div>
        </main>
        <footer>
          <div className="container text-center">
            <p>
              iVideos was created only for an educational purposes. Application uses the YouTube API and it is written in <b>ReactJS</b> with <b>Bootstrap</b>.
            </p>
            <div>
              <img src={react_logo} className="App-logo" alt="ReactJS" />
              <img src={bootstrap_logo} className="App-logo" alt="Bootstrap" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
