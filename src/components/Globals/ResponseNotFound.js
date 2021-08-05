import React from "react";
import responseNotFoundImg from "../../images/responseNotFound.png";

const ResponseNotFound = () => {
  return (
    <div
      className="all-response"
      style={{
        display: "grid",
        placeItems: "center",
        paddingTop: "3rem",
      }}
    >
      <img src={responseNotFoundImg} alt="" />
    </div>
  );
};

export default ResponseNotFound;
