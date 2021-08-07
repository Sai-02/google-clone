import React, { useContext } from "react";
import { Data } from "../../App";
import { Skeleton } from "@material-ui/lab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ResponseNotFound from "../Globals/ResponseNotFound";

const AllResponse = () => {
  const { allResponse, isAllResponseFound } = useContext(Data);
  const { searchInformation, items } = allResponse;
  return (
    <>
      <section className="all-response-container">
        <div className="space-filler"></div>
        <article className="all-response">
          <>
            {isAllResponseFound ? (
              <p className="results-info">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime} seconds)`}</p>
            ) : (
              <Skeleton variant="text" />
            )}

            <div className="all-response-content-container">
              {isAllResponseFound ? (
                <>
                  {items === undefined ? (
                    <ResponseNotFound />
                  ) : (
                    <>
                      {items.map((item, index) => {
                        return (
                          <div className="all-response-content" key={index}>
                            <a
                              href={item.link}
                              className="linkToPage"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p className="url">
                                {item.link}{" "}
                                <span className="all-reponse-icon">
                                  <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                              </p>{" "}
                              <h1 className="title">{item.title}</h1>
                            </a>
                            <p className="snippet">{item.snippet}</p>
                          </div>
                        );
                      })}
                    </>
                  )}
                </>
              ) : (
                [...Array(10)].map((item, index) => {
                  return (
                    <div className="all-response-content" key={index}>
                      <Skeleton variant="text" className="url" />
                      <Skeleton
                        variant="text"
                        className="title"
                        style={{
                          textDecoration: "none",
                        }}
                      />
                      <Skeleton variant="rect" className="snippet" />
                    </div>
                  );
                })
              )}
            </div>
          </>
        </article>
        <div className="space-filler"></div>
        <div className="space-filler"></div>
        <div className="space-filler"></div>
      </section>
    </>
  );
};

export default AllResponse;
