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
import ShoppingResponse from "./ShoppingResponse";
import VideoResponse from "./VideoResponse";
import useFetch from "../useFetch";

const SearchPage = () => {
  const history = useHistory();
  const searchPageRef = useRef();
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
    history.push(`/${searchValue}/all`);
  }, [isVoiceSearch]);
  useEffect(() => {
    console.log("search value is changed");
    history.push(`/${searchValue}/all`);
  }, [searchValue]);
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

  return (
    <>
      {isVoiceSearch ? (
        <VoiceSearch />
      ) : (
        <>
          <section className="search-page" ref={searchPageRef}>
            {/* Search Page Navbar */}
            <SearchPageNavbar navbarFixed={navbarFixed} />
            {/* End of Search Pagge Navbar */}

            <Switch>
              <Route path={`/${searchValue}/all`}>
                <AllResponse searchPageRef={searchPageRef} />
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
              <Route path={`/${searchValue}/Shopping`}>
                <ShoppingResponse />
              </Route>
            </Switch>
          </section>
        </>
      )}
    </>
  );
};

export default SearchPage;
