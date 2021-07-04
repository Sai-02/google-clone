import React from "react";
import { useContext } from "react";
import Navbar from "./Navbar";
import HomePageHero from "./HomePageHero";
import VoiceSearch from "./VoiceSearch";
import { Data } from "../../App";
const HomePage = () => {
  const { isVoiceSearch, setIsVoiceSearch } = useContext(Data);
  return (
    <>
      {isVoiceSearch ? (
        <VoiceSearch />
      ) : (
        <div className="home-section">
          <Navbar />
          <HomePageHero />
        </div>
      )}
    </>
  );
};

export default HomePage;
