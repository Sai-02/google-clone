import React from "react";
import Navbar from "./Navbar";
import HomePageHero from "./HomePageHero";
import { Modal } from "antd";
const HomePage = () => {
  const searchValueLengthExceedAlert = () => {
    Modal.info({
      title: "Maximum 200 characters are allowed",
    });
  };
  return (
    <>
      <div className="home-section">
        <Navbar />
        <HomePageHero
          searchValueLengthExceedAlert={searchValueLengthExceedAlert}
        />
      </div>
    </>
  );
};

export default HomePage;
