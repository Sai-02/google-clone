import React, { useContext, useEffect } from "react";
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
  return (
    <>
      {isVoiceSearch ? (
        <VoiceSearch />
      ) : (
        <>
          <section className="search-page">
            {/* Search Page Navbar */}
            <SearchPageNavbar />
            {/* End of Search Pagge Navbar */}
          </section>

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
            <Route path={`/${searchValue}/Shopping`}>
              <ShoppingResponse />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
};

export default SearchPage;
