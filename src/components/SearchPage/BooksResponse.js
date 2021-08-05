import React, { useContext } from "react";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Skeleton } from "@material-ui/lab";
import ResponseNotFound from "../Globals/ResponseNotFound";
const BooksResponse = () => {
  const {
    booksResponse,
    setBooksResponse,
    isBooksResponseFound,
    setIsBooksResponseFound,
  } = useContext(Data);

  return (
    <section className="books-response-container">
      <div className="space-filler"></div>
      <div className="books-response">
        {isBooksResponseFound ? (
          <>
            {booksResponse.items === undefined ? (
              <ResponseNotFound />
            ) : (
              <>
                {booksResponse.items.map((item) => {
                  return (
                    <article className="books-response-article">
                      <div className="books-response-img-container">
                        {"imageLinks" in item.volumeInfo ? (
                          <img
                            src={item.volumeInfo.imageLinks.thumbnail}
                            onClick={() => {
                              window.open(item.volumeInfo.infoLink);
                            }}
                          />
                        ) : (
                          <Skeleton
                            variant="rect"
                            className="cursor-pointer"
                            style={{
                              width: "128px",
                              height: "169px",
                            }}
                            onClick={() => {
                              window.open(item.volumeInfo.infoLink);
                            }}
                          />
                        )}
                      </div>
                      <div className="books-response-info-container">
                        <a
                          href={item.volumeInfo.infoLink}
                          className="book-url"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {"books.google.in "}
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              style={{
                                marginLeft: "4px",
                                fontSize: "7px",
                              }}
                            />
                          </p>
                          <h3 className="book-title">
                            {item.volumeInfo.title}
                          </h3>
                        </a>
                        <p className="book-author-time-container">
                          <span className="book-author">
                            {item.volumeInfo.authors.map((singleAuthor) => {
                              return `${singleAuthor} `;
                            })}
                          </span>
                          <span className="book-time">
                            {item.volumeInfo.publishedDate.substring(0, 4)}
                          </span>
                        </p>
                        <p className="book-description">
                          {item.volumeInfo.description}
                        </p>
                        <div className="book-preview-btn-container">
                          <button
                            className="book-preview-btn"
                            onClick={() => {
                              window.open(item.volumeInfo.previewLink);
                            }}
                          >
                            <MenuBookIcon
                              style={{
                                color: "#1A73E8",
                                marginRight: "4px",
                                fontSize: "1.1rem",
                              }}
                            />
                            {"Preview"}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </>
            )}
          </>
        ) : (
          <>
            {[...Array(10)].map(() => {
              return (
                <article className="books-response-article">
                  <div className="books-response-img-container">
                    <Skeleton
                      variant="rect"
                      style={{
                        width: "128px",
                        height: "169px",
                      }}
                    />
                  </div>
                  <div className="books-response-info-container">
                    <div className="book-url">
                      <p>
                        <Skeleton />
                      </p>
                      <h3
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Skeleton />
                      </h3>
                    </div>
                    <Skeleton />
                    <p className="book-description">
                      <Skeleton
                        variant="rect"
                        style={{
                          height: "3rem",
                        }}
                      />
                    </p>
                    <div className="book-preview-btn-container">
                      <Skeleton
                        style={{
                          width: "6rem",
                        }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </>
        )}
      </div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
      <div className="space-filler"></div>
    </section>
  );
};

export default BooksResponse;
