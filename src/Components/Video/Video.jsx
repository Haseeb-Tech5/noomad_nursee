import React from "react";
import "./Video.css";
import Video1 from "../Video/video.mp4";

const Video = () => {
  return (
    <div className="video-container2">
      <video src={Video1} autoPlay loop muted className="video" />
      <div className="video-heading-container">
        <h2>Connecting Nurses to Practices, Bridging Excellence Together</h2>
        <button>Join now</button>
      </div>
      <div className="video-button"></div>
    </div>
  );
};

export default Video;
