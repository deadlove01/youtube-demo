import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectedVideo }) => {
  const displayList = videos.map((vid) => {
    return (
      <VideoItem
        key={vid.id.videoId}
        video={vid}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });

  return <div className="ui relaxed divided list">{displayList}</div>;
};

export default VideoList;
