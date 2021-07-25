import React, { useContext } from "react";
import { Data } from "../../App";
import { Skeleton } from "@material-ui/lab";
import { PlayCircleFilledRounded } from "@material-ui/icons";
import { FilterDate } from "../Gloabals/FilterDate";

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
      <div className="video-response">
        {isVideoResponseFound ? (
          <>
            <p className="video-response-search-details">
              About {videoResponse.pageInfo.totalResults.toLocaleString()}{" "}
              results (0.32 seconds)
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
                      <h1 className="video-response-title">
                        {item.snippet.title}
                      </h1>
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
                          {FilterDate(
                            item.snippet.publishTime.substring(0, 10)
                          )}{" "}
                          uploaded by {item.snippet.channelTitle}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <p className="video-response-search-details">
              <Skeleton variant="text" />
            </p>
            <div className="video-response-content-container">
              {[...Array(25)].map(() => {
                return (
                  <article className="video-response-content">
                    <div className="video-response-link">
                      <p
                        className="video-response-url"
                        style={{
                          lineHeight: "1",
                        }}
                      >
                        <Skeleton variant="text" />
                      </p>
                      <h1
                        className="video-response-title"
                        style={{
                          textDecoration: "none",
                          lineHeight: "1.8",
                        }}
                      >
                        <Skeleton variant="text" />
                      </h1>
                    </div>
                    <div className="video-response-info">
                      <div
                        style={{
                          height: "65px",
                          width: "116px",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            overflow: "hidden",
                            height: "100%",
                          }}
                        >
                          <Skeleton
                            variant="rect"
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="video-response-info-para-container"
                        style={{
                          display: "grid",
                          gridTemplateRows: "3fr 1fr",
                          gap: "8px",
                        }}
                      >
                        <p
                          className="video-response-para"
                          style={{
                            height: "100%",
                          }}
                        >
                          <Skeleton
                            variant="rect"
                            style={{
                              height: "100%",
                            }}
                          />
                        </p>
                        <p className="video-response-date">
                          <Skeleton variant="text" />
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
    </section>
  );
};

export default VideoResponse;
