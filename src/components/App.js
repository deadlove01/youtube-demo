import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("react js");
  }

  onTermSubmit = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    const randomDefaultVideo =
      result.data.items[Math.floor(Math.random() * result.data.items.length)];
    this.setState({
      videos: result.data.items,
      selectedVideo: randomDefaultVideo,
    });
  };

  onSelectedVideo = (video) => {
    console.log(`selected video from app: ${video.snippet.title}`);
    this.setState({ selectedVideo: video });
  };

  render() {
    const videos = this.state.videos;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                onSelectedVideo={this.onSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
