import React from "react";
import { BannerFrame, SocialLink } from "./Banner.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default () => {
  console.log("banner");

  return (
    <BannerFrame>
      <SocialLink url="https://www.facebook.com/profile.php?id=100004682232589">
        <FontAwesomeIcon icon={faFacebookF} size={"lg"} />
      </SocialLink>
      <SocialLink url="https://www.instagram.com/sanghyeon3751/?hl=ko">
        <FontAwesomeIcon icon={faInstagram} size={"lg"} />
      </SocialLink>
      <SocialLink url={"https://www.github.com/boh001"}>
        <FontAwesomeIcon icon={faGithub} size={"lg"} />
      </SocialLink>
    </BannerFrame>
  );
};
