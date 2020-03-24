import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, center } from "../Global/variable";

export const NavFrame = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${color.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 769px) {
    top: 0;
    right: 0;
    width: 500px;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    top: 0;
    z-index: 999;
    width: 100%;
    height: 80px;
  }
  @media screen and (max-width: 478px) {
    height: 40px;
  }
`;
export const LinkFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-gap: 0px 20px;
  }
  @media screen and (max-width: 478px) {
    grid-gap: 10px;
  }
`;
export const NavLink = styled(Link)`
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 60px;
  ${center};
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 0;
  }
  @media screen and (max-width: 478px) {
    font-size: 12px;
    margin: 0;
  }
`;
