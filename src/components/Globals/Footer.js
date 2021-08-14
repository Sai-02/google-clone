import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <h3>Made with ❤️ by Sai Prashant</h3>
      <ul>
        <li>
          <a
            href="https://github.com/Sai-02"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sai-prashant-saxena-3404aa1a0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://www.hackerrank.com/sai_prashant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faHackerrank} />
          </a>
        </li>
        <li>
          <a
            href="https://www.codechef.com/users/sai_prashant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="simple-icons:codechef"
              color="white"
              width="35"
              height="35"
            />
          </a>
        </li>
        <li>
          <a
            href="https://auth.geeksforgeeks.org/user/sai_prashant/practice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="simple-icons:geeksforgeeks"
              color="white"
              width="35"
              height="35"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
