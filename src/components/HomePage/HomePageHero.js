import React, { useContext, useState, useEffect } from "react";
import Logo from "../../images/logo.png";
import Mic from "../../images/Google_mic.svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-ui/core";
import { Data } from "../../App";
import Alert from "@material-ui/lab/Alert";
import useFetch from "../useFetch";
import { isValidText } from "../Gloabals/isValidText";
const HomePageHero = () => {
  const [input, setInput] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const {
    setIsVoiceSearch,
    isSearch,
    setIsSearch,
    searchValue,
    setSearchValue,
    doSearch,
    setDoSearch,
  } = useContext(Data);
  useEffect(() => {
    if (searchValue === "") {
    } else {
      // useFetch(searchValue);
      setDoSearch(true);
    }
  }, [searchValue]);
  useFetch(searchValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    if (!isValidText(input)) {
      setIsAlert(true);
      return;
    }

    setSearchValue(input);
  };
  return (
    <>
      {isAlert ? (
        <div className="home-page-alert-container">
          <Alert
            severity="error"
            onClose={() => {
              setIsAlert(false);
            }}
            className="home-page-alert"
          >
            Please remove special characters from input!
          </Alert>
        </div>
      ) : (
        ""
      )}

      <section className="home-page-hero-section">
        <div className="home-page-hero-section-center">
          <article className="home-logo-img-container">
            <img src={Logo} alt="Google image" />
          </article>
          <form className="home-search-bar-container" onSubmit={handleSubmit}>
            <div className="home-search-bar">
              <FontAwesomeIcon icon={faSearch} className="home-search-icon" />
              <input
                type="text"
                className="home-input"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <span className="mic-search-container">
                <Tooltip title="Search by voice" arrow placement="bottom">
                  <img
                    src={Mic}
                    alt=""
                    onClick={() => {
                      setIsVoiceSearch(true);
                    }}
                  />
                </Tooltip>
              </span>
            </div>
            <div className="home-btn-container">
              <button className="home-btn" onClick={handleSubmit}>
                Search
              </button>
              <button className="home-btn">I'm feeling lucky</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePageHero;
