import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import AppsIcon from "@material-ui/icons/Apps";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { SplitButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
const Navbar = () => {
  console.log("hello");
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/0/?ogbl#inbox"
            className="nav-list-link"
          >
            Gmail
          </a>
        </li>
        <li className="nav-list-item">Images</li>
        <li className="nav-list-item google-apps-icon-container">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="google-apps-icon"
            >
              <AppsIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu className="home-page-drop-down-container">
              <article className="home-page-drop-down">
                <ul className="drop-down-icons-container">
                  <li className="drop-down-icon-container">fwfn</li>
                  <li className="drop-down-icon-container">ht</li>
                  <li className="drop-down-icon-container">ydryrd</li>
                  <li className="drop-down-icon-container">1</li>
                  <li className="drop-down-icon-container">2</li>
                  <li className="drop-down-icon-container">3</li>
                  <li className="drop-down-icon-container">4</li>
                  <li className="drop-down-icon-container">5</li>
                  <li className="drop-down-icon-container">6</li>
                  <li className="drop-down-icon-container">7</li>
                  <li className="drop-down-icon-container">8</li>
                  <li className="drop-down-icon-container">9</li>
                  <li className="drop-down-icon-container">10</li>
                  <li className="drop-down-icon-container">11</li>
                  <li className="drop-down-icon-container">12</li>
                  <li className="drop-down-icon-container">13</li>
                  <li className="drop-down-icon-container">14</li>
                </ul>
              </article>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="nav-list-item user-icon-container">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
