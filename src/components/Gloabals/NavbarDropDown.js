import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import Dropdown from "react-bootstrap/Dropdown";
import { AccountCircle } from "@material-ui/icons";
const NavbarDropDown = () => {
  return (
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
            <li className="drop-down-icon-container">
              <a href="firebase.com" target="_blank" rel="noreferrer">
                <div className="drop-down-icon">
                  <AccountCircle className="account-icon" />
                </div>
                <div className="drop-down-icon-info">Account</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/2-google-search.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Google Search</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/3-google-my-business.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">My Business</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/maps/search/google+maps/@28.4610277,77.2946795,13z/data=!3m1!4b1"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/4-google-maps.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Maps</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/5-youtube.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">YouTube</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://play.google.com/store?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/6-google-play.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Play</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/7-google-news.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">News</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/8-gmail.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Gmail</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://meet.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/9-google-meet.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Meet</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/10-google-chat.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Chat</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/11-google-contact.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Contacts</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/12-google-drive.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Drive</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/13-google-calendar.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Calendar</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/14-google-translate.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Translate</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/15-google-photos.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Photos</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/16-google-duo.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Duo</div>
              </a>
            </li>
            <li className="drop-down-icon-container">
              <a
                href="https://www.google.com/business/?ppsrc=GPDA2&gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-down-icon">
                  <img
                    src="./images/navbar/drop-down-menu/17-google-shop.png"
                    alt="google-icon"
                  />
                </div>
                <div className="drop-down-icon-info">Shopping</div>
              </a>
            </li>
          </ul>
        </article>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarDropDown;
