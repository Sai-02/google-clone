import React, { useContext } from "react";
import { Data } from "../../App";
import { Skeleton } from "@material-ui/lab";

const VideoResponse = () => {
  const {
    videoResponse,
    setVideoResponse,
    isVideoResponseFound,
    setIsVideoResponseFound,
  } = useContext(Data);
  return (
    <section className="video-response-container">
      <div className="space-filler"></div>
      <div className="video-response">video response</div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
    </section>
  );
};

export default VideoResponse;
