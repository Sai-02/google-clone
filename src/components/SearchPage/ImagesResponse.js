import React, { useContext } from "react";
import { Data } from "../../App";
import { Skeleton } from "@material-ui/lab";
const ImagesResponse = () => {
  const {
    imageResponse,
    setImageResponse,
    isImageResponseFound,
    setIsImageResponseFound,
  } = useContext(Data);
  const { items } = imageResponse;
  return (
    <>
      {isImageResponseFound ? (
        <section className="image-response">
          {items.map((item) => {
            return (
              <>
                <article className="image-response-content">
                  <div className="image-response-img-container">
                    <img src={item.link} alt="" />
                  </div>
                  <div className="image-response-text-container">
                    <p>{item.title}</p>
                    <p>{item.displayLink}</p>
                  </div>
                </article>
              </>
            );
          })}
        </section>
      ) : (
        <section className="image-response">
          {[...Array(10)].map((index) => {
            return (
              <>
                <article className="image-response-content">
                  <div className="image-response-img-container">
                    <Skeleton
                      className="image-response-skeleton"
                      variant="rect"
                      height={200}
                      key={index}
                      
                    />
                  </div>
                  <div className="image-response-text-container">
                    <Skeleton
                      style={{
                        width: "100%",
                      }}
                      variant="text"
                    />
                    <Skeleton
                      style={{
                        width: "100%",
                      }}
                      variant="text"
                    />
                  </div>
                </article>
              </>
            );
          })}
        </section>
      )}
    </>
  );
};

export default ImagesResponse;
