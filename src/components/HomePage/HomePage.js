import React from "react";
import { useContext } from "react";
import Navbar from "./Navbar";
import HomePageHero from "./HomePageHero";
import VoiceSearch from "./VoiceSearch";
import { Data } from "../../App";
import { Modal } from "antd";
const HomePage = () => {
  const { isVoiceSearch, setIsVoiceSearch } = useContext(Data);
  const searchValueLengthExceedAlert = () => {
    Modal.info({
      title: "Maximum 200 characters are allowed",
    });
  };
  return (
    <>
      {isVoiceSearch ? (
        <VoiceSearch />
      ) : (
        <div className="home-section">
          <Navbar />
          <HomePageHero
            searchValueLengthExceedAlert={searchValueLengthExceedAlert}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
