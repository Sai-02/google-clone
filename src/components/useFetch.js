import React, { useContext, useEffect } from "react";
import { Data } from "../App";
import axios from "axios";

export const useFetch = ({ data }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchId = process.env.REACT_APP_Search_Key;
  const imageResponseApiKey = process.env.REACT_APP_IMAGE_API_KEY;
  const imageResponseSearchId = process.env.REACT_APP_IMAGE_SEARCH_ID;
  const {
    searchValue,
    setSearchValue,
    allResponse,
    setAllResponse,
    doSearch,
    setDoSearch,
    isSearch,
    setIsSearch,
    isVoiceSearch,
    setIsVoiceSearch,
    isAllResponseFound,
    setIsAllResponseFound,
    imageResponse,
    setImageResponse,
    isImageResponseFound,
    setIsImageResponseFound,
  } = useContext(Data);
  const getAllResponse = async () => {
    // if (searchValue === "") return;
    if (doSearch && searchValue !== "") {
      axios
        // .get(
        //   `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchId}&q=${searchValue}`
        // )
        .get("../allResponse.json")
        .then((res) => {
          console.log(res);
          // setDoSearch(false);

          setAllResponse(res.data);
          setIsSearch(true);
          setIsVoiceSearch(false);

          setTimeout(() => {
            setIsAllResponseFound(true);
          }, 2000);
        });
    }
  };
  const getImageResponse = () => {
    if (doSearch && searchValue !== "") {
      axios
        // .get(
        //   `https://www.googleapis.com/customsearch/v1?key=${imageResponseApiKey}&cx=${imageResponseSearchId}&q=${searchValue}&searchType=image`
        // )
        .get("../imageResponse.json")
        .then((res) => {
          console.log("image response is", res);
          setDoSearch(false);
          setImageResponse(res.data);
          setIsSearch(true);
          setIsVoiceSearch(false);
          setTimeout(() => {
            setIsImageResponseFound(true);
          }, 5000);
        });
    }
  };
  useEffect(() => {
    if (doSearch) {
      getAllResponse();
      getImageResponse();
    }
  }, [doSearch, searchValue]);
};

export default useFetch;
