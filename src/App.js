import React from "react";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import { useState } from "react";
const Data = React.createContext(null);
export { Data };
function App() {
  const [doSearch, setDoSearch] = useState(false);
  const [allResponse, setAllResponse] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);

  return (
    <Data.Provider
      value={{
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
      }}
    >
      {isSearch ? <SearchPage /> : <HomePage />}
    </Data.Provider>
  );
}

export default App;
