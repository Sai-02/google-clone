import React, { useContext } from "react";
import { Data } from "../../App";
import SearchPageNavbar from "./SearchPageNavbar";
import VoiceSearch from "../HomePage/VoiceSearch";
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
      {isVoiceSearch ? (
        <VoiceSearch />
      ) : (
        <section className="search-page">
          {/* Search Page Navbar */}
          <SearchPageNavbar />
          {/* End of Search Pagge Navbar */}
        </section>
      )}
    </>
  );
};

export default SearchPage;
