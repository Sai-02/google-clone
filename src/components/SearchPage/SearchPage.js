import React, { useContext, useEffect, useRef, useState } from "react";
import { Data } from "../../App";
import SearchPageNavbar from "./SearchPageNavbar";
import VoiceSearch from "../HomePage/VoiceSearch";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import AllResponse from "./AllResponse";
import BooksResponse from "./BooksResponse";
import ImagesResponse from "./ImagesResponse";
import NewsResponse from "./NewsResponse";
import VideoResponse from "./VideoResponse";
import { Modal } from "antd";

const SearchPage = () => {
  const history = useHistory();
  const [navbarFixed, setNavbarFixed] = useState(false);
  const {
    isVoiceSearch,
    setIsVoiceSearch,
    isSearch,
    setIsSearch,
    searchValue,
    setSearchValue,
    allResponse,
    setAllResponse,
    doSearch,
    setDoSearch,
  } = useContext(Data);
  useEffect(() => {
    console.log("search value os changed");
    switch (searchPageActiveComponent.current) {
      case 0:
        history.push(`/${searchValue}/all`);
        break;
      case 1:
        history.push(`/${searchValue}/Images`);
        break;
      case 2:
        history.push(`/${searchValue}/Videos`);
        break;
      case 3:
        history.push(`/${searchValue}/News`);
        break;
      case 4:
        history.push(`/${searchValue}/Books`);
        break;
      default:
        history.push(`/${searchValue}/all`);
    }
  }, [searchValue, isVoiceSearch]);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const searchPageActiveComponent = useRef(0);
  const specialCharacterAlert = () => {
    Modal.error({
      title: "Remove special characters from input",
    });
  };
  const searchValueLengthExceedAlert = () => {
    Modal.info({
      title: "Maximum length of keyword allowed is 200",
    });
  };
  return (
    <>
      {isVoiceSearch ? (
        <VoiceSearch />
      ) : (
        <>
          <section className="search-page">
            {/* Search Page Navbar */}
            <SearchPageNavbar
              navbarFixed={navbarFixed}
              searchPageActiveComponent={searchPageActiveComponent}
              specialCharacterAlert={specialCharacterAlert}
              searchValueLengthExceedAlert={searchValueLengthExceedAlert}
            />
            {/* End of Search Pagge Navbar */}

            <Switch>
              <Route path={`/${searchValue}/all`}>
                <AllResponse />
              </Route>
              <Route path={`/${searchValue}/Images`}>
                <ImagesResponse />
              </Route>
              <Route path={`/${searchValue}/Videos`}>
                <VideoResponse />
              </Route>
              <Route path={`/${searchValue}/News`}>
                <NewsResponse />
              </Route>
              <Route path={`/${searchValue}/Books`}>
                <BooksResponse />
              </Route>
            </Switch>
          </section>
        </>
      )}
    </>
  );
};

export default SearchPage;
