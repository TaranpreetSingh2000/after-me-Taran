import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Social.module.css";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  const socialIcons = [faFacebook, faInstagram, faTwitter, faLinkedin];
  return (
    <div>
      <ul className={style.social_list}>
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <a
              className={style.icon}
              href="#"
              aria-label={`Social Icon ${index + 1}`}
            >
              <FontAwesomeIcon icon={icon} size="1x" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
