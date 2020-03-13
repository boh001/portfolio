import React from "react";
import { BannerFrame, SocialLink } from "./Banner.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <BannerFrame>
      <SocialLink to="#">
        <FontAwesomeIcon icon={faFacebookF} size={"lg"} />
      </SocialLink>
      <SocialLink to="#">
        <FontAwesomeIcon icon={faInstagram} size={"lg"} />
      </SocialLink>
      <SocialLink url={"https://www.github.com/boh001"}>
        <FontAwesomeIcon icon={faGithub} size={"lg"} />
      </SocialLink>
    </BannerFrame>
  );
};
