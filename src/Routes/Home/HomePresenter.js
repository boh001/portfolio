import React from "react";
import Intro from "Components/Intro/Intro";
import Banner from "Components/Banner/Banner";
import styled from "styled-components";

const Img = styled.img.attrs({
  src:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
})`
  position: absolute;
  width: 1500px;
  height: 1200px;
  opacity: 0.1;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 700px;
    height: 600px;
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
