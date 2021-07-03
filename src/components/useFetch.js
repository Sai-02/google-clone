import React, { useContext } from "react";
import { Data } from "../App";

export const useFetch = ({ data }) => {
  const { searchValue, setSearchValue } = useContext(Data);
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchId = process.env.REACT_APP_Search_Key;
  console.log(apiKey, searchId);
};

export default useFetch;
