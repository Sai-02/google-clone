import React, { useContext } from "react";
import { Data } from "../../App";
import SearchPageNavbar from "./SearchPageNavbar";
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
    <section className="search-page">
      {/* Search Page Navbar */}
      <SearchPageNavbar />
      {/* End of Search Pagge Navbar */}
    </section>
  );
};

export default SearchPage;
