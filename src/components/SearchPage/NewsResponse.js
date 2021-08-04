import React, { useContext } from "react";
import { Data } from "../../App";
import { FilterDate } from "../Gloabals/FilterDate";
import { Skeleton } from "@material-ui/lab";
import ResponseNotFound from "../Gloabals/ResponseNotFound";

const NewsResponse = () => {
  const {
    newsResponse,
    setNewsResponse,
    isNewsResponseFound,
    setIsNewsResponseFound,
  } = useContext(Data);
  return (
    <>
      <section className="news-response-container">
        <div className="space-filler"></div>
        <div className="news-response">
          {isNewsResponseFound ? (
            <>
              {newsResponse.articles.length == 0 ? (
                <ResponseNotFound />
              ) : (
                <>
                  <p className="news-response-stats">
                    About {newsResponse.totalArticles.toLocaleString()} results
                  </p>
                  <div className="news-response-article-container">
                    {newsResponse.articles.map((item) => {
                      return (
                        <article className="news-response-article">
                          <div className="news-response-article-info-container">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="news-article-link"
                            >
                              <p className="news-article-source-name">
                                {item.source.name}
                              </p>
                              <h3 className="news-article-title">
                                {item.title}
                              </h3>
                            </a>
                            <p className="news-article-description">
                              {item.description}
                            </p>
                            <p className="news-article-date">
                              {FilterDate(item.publishedAt)}
                            </p>
                          </div>
                          <div className="news-response-article-img-container">
                            <img src={item.image} alt="" />
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <p className="news-response-stats">
                <Skeleton
                  style={{
                    maxWidth: "23%",
                  }}
                />
              </p>
              <div className="news-response-article-container">
                {[...Array(8)].map(() => {
                  return (
                    <article className="news-response-article">
                      <div
                        className="news-response-article-info-container"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div className="news-article-link">
                          <p className="news-article-source-name">
                            <Skeleton
                              style={{
                                width: "20%",
                              }}
                            />
                          </p>
                          <h3 className="news-article-title">
                            <Skeleton
                              style={{
                                width: "100%",
                              }}
                            />
                          </h3>
                        </div>
                        <p className="news-article-description">
                          <Skeleton
                            style={{
                              width: "100%",
                            }}
                            variant="rect"
                          />
                        </p>
                        <p className="news-article-date">
                          <Skeleton
                            style={{
                              width: "100%",
                            }}
                          />
                        </p>
                      </div>
                      <div
                        className="news-response-article-img-container"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Skeleton
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          variant="rect"
                        />
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
    </>
  );
};

export default NewsResponse;
