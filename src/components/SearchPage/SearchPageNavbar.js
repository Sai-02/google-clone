import React, { useContext, useState } from "react";
import Logo from "../../images/logo-navbar.png";
import { Data } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
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
  const [input, setInput] = useState(searchValue);
  return (
    <nav className="search-page-nav">
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
      <form className="search-page-search-bar-container">
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
          <FontAwesomeIcon
            icon={faSearch}
            className="search-page-search-icon"
          />
        </div>
      </form>
      <div className="space-filler"></div>
      <Tooltip title="Apps" interactive>
        <div className="search-page-apps-icon-container google-apps-icon-container">
          <NavbarDropDown />
        </div>
      </Tooltip>
      <Tooltip title="Google Account" interactive placement="left-end">
        <li className="nav-list-item user-icon-container">
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
        </li>
      </Tooltip>
    </nav>
  );
};

export default SearchPageNavbar;
