import { useContext, useEffect } from "react";
import { Data } from "../App";
import axios from "axios";
export const useFetch = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchId = process.env.REACT_APP_Search_Key;
  const imageResponseApiKey = process.env.REACT_APP_IMAGE_API_KEY;
  const imageResponseSearchId = process.env.REACT_APP_IMAGE_SEARCH_ID;
  const videoResponseApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const newResponseApiKey = process.env.REACT_APP_NEWS_API_KEY;
  const booksResponseApiKey = process.env.REACT_APP_BOOKS_API_KEY;
  const {
    searchValue,
    setAllResponse,
    doSearch,
    setDoSearch,
    setIsSearch,
    setIsVoiceSearch,
    setIsAllResponseFound,
    setImageResponse,
    setIsImageResponseFound,
    setVideoResponse,
    setIsVideoResponseFound,
    setNewsResponse,
    setIsNewsResponseFound,
    setBooksResponse,
    setIsBooksResponseFound,
  } = useContext(Data);
  const getAllResponse = async () => {
    if (doSearch && searchValue !== "") {
      axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchId}&q=${searchValue}`
        )
        // .get("../allResponse.json")
        .then((res) => {
          setAllResponse(res.data);
          setIsAllResponseFound(true);
        });
    }
  };
  const getImageResponse = () => {
    if (doSearch && searchValue !== "") {
      axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${imageResponseApiKey}&cx=${imageResponseSearchId}&q=${searchValue}&searchType=image`
        )
        // .get("../imageResponse.json")
        .then((res) => {
          setImageResponse(res.data);
          setIsImageResponseFound(true);
        });
    }
  };
  const getVideoResponse = () => {
    if (doSearch && searchValue !== "") {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchValue}&type=video&key=${videoResponseApiKey}`
        )
        // .get("../videoResponse.json")
        .then((res) => {
          setVideoResponse(res.data);
          setIsVideoResponseFound(true);
        });
    }
  };
  const getNewsResponse = () => {
    if (doSearch && searchValue !== "") {
      axios
        .get(
          `https://gnews.io/api/v4/search?q=${searchValue}&lang=en&token=${newResponseApiKey}`
        )
        // .get("../newsResponse.json")
        .then((res) => {
          setNewsResponse(res.data);
          setIsNewsResponseFound(true);
        });
    }
  };
  const getBooksResponse = () => {
    if (doSearch && searchValue !== "") {
      axios
        .get(
          `https://books.googleapis.com/books/v1/volumes?q=${searchValue}&key=${booksResponseApiKey}`
        )
        // .get("../booksResponse.json")
        .then((res) => {
          setBooksResponse(res.data);
          setIsBooksResponseFound(true);
        });
    }
  };
  useEffect(() => {
    setDoSearch(false);
  }, []);
  useEffect(() => {
    if (doSearch) {
      console.log("I am in useFetch");
      setDoSearch(false);
      setIsVoiceSearch(false);
      setIsSearch(true);
      getAllResponse();
      getVideoResponse();
      getNewsResponse();
      getBooksResponse();
      getImageResponse();
    }
  }, [doSearch]);
};

export default useFetch;
