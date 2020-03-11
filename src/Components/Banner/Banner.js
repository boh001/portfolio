import React from "react";
import { BannerFrame, SocialLink } from "./Banner.style";

export default () => {
  return (
    <BannerFrame>
      <SocialLink to="#">FaceBook</SocialLink>
      <SocialLink to="#">Instargram</SocialLink>
      <SocialLink to="#">GitHub</SocialLink>
    </BannerFrame>
  );
};
