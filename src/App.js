import React from "react";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
const Data = React.createContext(null);
export { Data };
function App() {
  const [doSearch, setDoSearch] = useState(false);
  const [allResponse, setAllResponse] = useState({});
  const [imageResponse, setImageResponse] = useState({});
  const [videoResponse, setVideoResponse] = useState({});
  const [newsResponse, setNewsResponse] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);
  const [isAllResponseFound, setIsAllResponseFound] = useState(false);
  const [isImageResponseFound, setIsImageResponseFound] = useState(false);
  const [isVideoResponseFound, setIsVideoResponseFound] = useState(false);
  const [isNewsResponseFound, setIsNewsResponseFound] = useState(false);

  return (
    <BrowserRouter>
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
          isAllResponseFound,
          setIsAllResponseFound,
          imageResponse,
          setImageResponse,
          isImageResponseFound,
          setIsImageResponseFound,
          videoResponse,
          setVideoResponse,
          isVideoResponseFound,
          setIsVideoResponseFound,
          newsResponse,
          setNewsResponse,
          isNewsResponseFound,
          setIsNewsResponseFound,
        }}
      >
        {isSearch ? <SearchPage /> : <HomePage />}
      </Data.Provider>
    </BrowserRouter>
  );
}

export default App;
