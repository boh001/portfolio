import React from "react";
import Intro from "Components/Intro/Intro";
import Banner from "Components/Banner/Banner";
import styled from "styled-components";

const Img = styled.img.attrs({
  src:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
})`
  position: absolute;
  width: 100%;
  height: 90%;
  opacity: 0.1;
  background-size: cover;
  z-index: -1;
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 50%;
  }
`;
export default React.memo(() => {
  console.log("home");
  return (
    <>
      <Intro />
      <Banner />
      <Img />
    </>
  );
});
