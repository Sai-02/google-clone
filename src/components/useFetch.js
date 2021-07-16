import React, { useContext, useEffect } from "react";
import { Data } from "../App";
import axios from "axios";

export const useFetch = ({ data }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchId = process.env.REACT_APP_Search_Key;
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
  } = useContext(Data);
  const getAllResponse = () => {
    // if (searchValue === "") return;
    if (doSearch && searchValue !== "") {
      console.log("search value is ", searchValue);
      axios
        // .get(
        //   `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchId}&q=${searchValue}`
        // )
        .get("../allResponse.json")
        .then((res) => {
          console.log(res);
          setDoSearch(false);

          setAllResponse(res.data);
          setIsSearch(true);
          setIsVoiceSearch(false);
          setIsAllResponseFound(true);
        });
    }
  };
  getAllResponse();
};

export default useFetch;
