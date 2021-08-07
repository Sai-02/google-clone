import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { Tooltip } from "@material-ui/core";
import NavbarDropDown from "../Globals/NavbarDropDown";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/0/?ogbl#inbox"
            rel="noreferrer"
            className="nav-list-link"
          >
            Gmail
          </a>
        </li>
        <li className="nav-list-item">Images</li>
        <Tooltip title="Apps" interactive placement="left-end">
          <li className="nav-list-item google-apps-icon-container">
            <NavbarDropDown />
          </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
