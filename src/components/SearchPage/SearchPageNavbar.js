import React, { useContext, useState } from "react";
import Logo from "../../images/logo-navbar.png";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { TagOutlined } from "@ant-design/icons";
import { Tooltip } from "@material-ui/core";
import Mic from "../../images/Google_mic.svg.png";
import { Divider } from "@material-ui/core";
import NavbarDropDown from "../Gloabals/NavbarDropDown";
import { Dropdown } from "react-bootstrap";

const SearchPageNavbar = () => {
  const {
    isSearch,
    setIsSearch,
    searchValue,
    setSearchValue,
    isVoiceSearch,
    setIsVoiceSearch,
  } = useContext(Data);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am submitted");
  };
  const [input, setInput] = useState(searchValue);
  return (
    <>
      <nav className="search-page-navbar-container">
        <div className="search-page-nav">
          <div className="search-page-nav-image-container">
            <img
              src={Logo}
              alt="google image"
              onClick={() => {
                setIsSearch(false);
                setSearchValue("");
              }}
              className="search-page-logo"
            />
          </div>
          <form
            className="search-page-search-bar-container"
            onSubmit={handleSubmit}
          >
            <div className="search-page-search-bar">
              <input
                type="search"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <Divider
                orientation="vertical"
                flexItem
                className="search-page-search-bar-divider"
              />
              <span className="mic-search-container">
                <Tooltip title="Search by voice" arrow placement="bottom">
                  <img
                    src={Mic}
                    alt=""
                    onClick={() => {
                      setIsVoiceSearch(true);
                    }}
                  />
                </Tooltip>
              </span>
              <button
                className="search-page-search-icon-container"
                onClick={handleSubmit}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-page-search-icon"
                />
              </button>
            </div>
          </form>
          <div className="space-filler"></div>
          <Tooltip title="Apps" interactive>
            <div className="search-page-apps-icon-container google-apps-icon-container">
              <NavbarDropDown />
            </div>
          </Tooltip>
          <Tooltip title="Google Account" interactive placement="left-end">
            <div className="search-page-user-icon-container user-icon-container">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="google-apps-icon"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <button className="login-btn">sign in</button>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Tooltip>
        </div>
        <div className="search-page-nav-list-container">
          <div className="space-filler"></div>
          <ul className="search-page-nav-list">
            <li className="active">
              <span className="search-page-nav-list-icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span className="search-page-nav-list-text">All</span>
            </li>
            <li>
              <span className="search-page-nav-list-icon">
                <ImageOutlinedIcon />
              </span>
              <span className="search-page-nav-list-text">Images</span>
            </li>
            <li>
              <span className="search-page-nav-list-icon">
                <YouTubeIcon />
              </span>
              <span className="search-page-nav-list-text">Videos</span>
            </li>
            <li>
              <span className="search-page-nav-list-icon">
                <FontAwesomeIcon icon={faNewspaper} />
              </span>
              <span className="search-page-nav-list-text">News</span>
            </li>
            <li>
              <span className="search-page-nav-list-icon">
                <BookOutlinedIcon
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                />
              </span>
              <span className="search-page-nav-list-text">Books</span>
            </li>
            <li>
              <span className="search-page-nav-list-icon">
                <TagOutlined />
              </span>
              <span className="search-page-nav-list-text">Shopping</span>
            </li>
          </ul>
          <div className="space-filler"></div>
          <div className="space-filler"></div>
          <div className="space-filler"></div>
        </div>
      </nav>
      <Divider
        style={{
          color: " #202124",
          height: "0.2px",
        }}
      />
      {/* <hr /> */}
    </>
  );
};

export default SearchPageNavbar;
