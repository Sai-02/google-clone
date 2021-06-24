import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import AppsIcon from "@material-ui/icons/Apps";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <a
            href="https://mail.google.com/mail/u/0/?ogbl#inbox"
            className="nav-list-link"
          >
            Gmail
          </a>
        </li>
        <li className="nav-list-item">Images</li>
        <li className="nav-list-item google-apps-icon-container">
          <AppsIcon />
        </li>
        <li className="nav-list-item user-icon-container">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
