import React from "react";
import Logo from "../../images/logo.png";
import Mic from "../../images/Google_mic.svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
const HomePageHero = () => {
  return (
    <section className="home-page-hero-section">
      <div className="home-page-hero-section-center">
        <article className="home-logo-img-container">
          <img src={Logo} alt="Google image" />
        </article>
        <article className="home-search-bar-container">
          <div className="home-search-bar">
            <FontAwesomeIcon icon={faSearch} className="home-search-icon" />
            <input type="text" />
            <span className="mic-search-container">
              <Tooltip arrow title="Search by voice" placement="bottom">
                <img src={Mic} alt="" />
              </Tooltip>
            </span>
          </div>
          <div className="home-btn-container">
            <button className="home-btn">Search</button>
            <button className="home-btn">I'm feeling lucky</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomePageHero;
