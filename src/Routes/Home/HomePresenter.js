import React, { useState } from "react";
import styled from "styled-components";
import Intro from "Components/Intro/Intro";
import Logo from "Components/Logo/Logo";
import Banner from "Components/Banner/Banner";

export const Bg = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px;
  position: relative;
  z-index: 2;
  background-color: #010001;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease 0.5s;
  ${props => props.active && "transform: translateX(-400px)"}
`;

export default () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Bg active={active}>
        <Logo active={active} setActive={setActive} />
        <Intro />
        <Banner />
      </Bg>
    </>
  );
};
