import React, { useContext } from "react";
import { Data } from "../../App";
import { Skeleton } from "@material-ui/lab";
import { PlayCircleFilledRounded } from "@material-ui/icons";

const VideoResponse = () => {
  const {
    videoResponse,
    setVideoResponse,
    isVideoResponseFound,
    setIsVideoResponseFound,
  } = useContext(Data);
  const filterDate = (date) => {
    let newDate = "";
    for (let i = 0; i < 4; i++) {
      newDate += date.charAt(i);
    }
    newDate = "-" + newDate;
    let monthNumber = parseInt(date.substring(5, 7));
    switch (monthNumber) {
      case 1:
        newDate = "-Jan" + newDate;
        break;
      case 2:
        newDate = "-Feb" + newDate;
        break;
      case 3:
        newDate = "-Mar" + newDate;
        break;
      case 4:
        newDate = "-Apr" + newDate;
        break;
      case 5:
        newDate = "-May" + newDate;
        break;
      case 6:
        newDate = "-Jun" + newDate;
        break;
      case 7:
        newDate = "-Jul" + newDate;
        break;
      case 8:
        newDate = "-Aug" + newDate;
        break;
      case 9:
        newDate = "-Sep" + newDate;
        break;
      case 10:
        newDate = "-Oct" + newDate;
        break;
      case 11:
        newDate = "-Nov" + newDate;
        break;
      case 12:
        newDate = "-Dec" + newDate;
        break;
      default:
        newDate = "-Jan" + newDate;
        break;
    }
    for (let i = 9; i >= 8; i--) {
      newDate = date.charAt(i) + newDate;
    }
    return newDate;
  };

  return (
    <section className="video-response-container">
      <div className="space-filler"></div>
      <div className="video-response">
        <p className="video-response-search-details">
          About {videoResponse.pageInfo.totalResults.toLocaleString()} results
          (0.32 seconds)
        </p>
        <div className="video-response-content-container">
          {videoResponse.items.map((item) => {
            return (
              <article className="video-response-content">
                <a
                  href={`https://www.youtube.com/video/${item.id.videoId}`}
                  className="video-response-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="video-response-url">{`www.youtube.com > ${item.snippet.channelTitle}`}</p>
                  <h1 className="video-response-title">{item.snippet.title}</h1>
                </a>
                <div className="video-response-info">
                  <div
                    style={{
                      height: "65px",
                      width: "116px",
                    }}
                  >
                    <div
                      className="video-response-info-img-container"
                      onClick={() => {
                        window.open(
                          `https://www.youtube.com/video/${item.id.videoId}`
                        );
                      }}
                    >
                      <img
                        src={item.snippet.thumbnails.medium.url}
                        alt="an image"
                      />
                      <div className="video-response-img-icon-container">
                        <PlayCircleFilledRounded
                          style={{
                            color: "white",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="video-response-info-para-container">
                    <p className="video-response-para">
                      {item.snippet.description}
                    </p>
                    <p className="video-response-date">
                      {filterDate(item.snippet.publishTime.substring(0, 10))}{" "}
                      uploaded by {item.snippet.channelTitle}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
    </section>
  );
};

export default VideoResponse;
