import React, { useContext } from "react";
import { Data } from "../../App";
import SearchPageNavbar from "./SearchPageNavbar";
import VoiceSearch from "../HomePage/VoiceSearch";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AllResponse from "./AllResponse";
import BooksResponse from "./BooksResponse";
import ImagesResponse from "./ImagesResponse";
import NewsResponse from "./NewsResponse";
import ShoppingResponse from "./ShoppingResponse";
import VideoResponse from "./VideoResponse";
const SearchPage = () => {
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
  return (
    <>
      <BrowserRouter>
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
              <Route path="/all">
                <AllResponse />
              </Route>
              <Route path="/Images">
                <ImagesResponse />
              </Route>
              <Route path="/Videos">
                <VideoResponse />
              </Route>
              <Route path="/News">
                <NewsResponse />
              </Route>
              <Route path="/Books">
                <BooksResponse />
              </Route>
              <Route path="/Shopping">
                <ShoppingResponse />
              </Route>
            </Switch>
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default SearchPage;
