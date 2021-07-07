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
          <div className="search-apge-header">
            <SearchPageNavbar />
            {/* End of Search Pagge Navbar */}
            <article className="search-page-nav-links">
               <ul>
                 <li></li>
               </ul>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default SearchPage;
