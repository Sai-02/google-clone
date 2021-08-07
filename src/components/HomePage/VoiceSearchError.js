import React from "react";
import BrowserNotSupported from "../../images/BrowserNotSupported.png";

const VoiceSearchError = () => {
  return (
    <section className="voice-search-error">
      <article
        className="voice-search-error-section-center"
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          className="img-container"
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={BrowserNotSupported} alt="" />
        </div>
        <h1
          style={{
            color: "rgb(15, 149, 202)",
            fontSize: "2rem",
          }}
        >
          This functionality does not work in your browser
        </h1>
      </article>
    </section>
  );
};

export default VoiceSearchError;
