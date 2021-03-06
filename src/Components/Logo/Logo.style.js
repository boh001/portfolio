import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoFrame = styled(Link)`
  position: absolute;
  top: 50px;
  left: 100px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ToggleUp = styled.div`
  width: 35px;
  height: 2px;
  ${props =>
    props.active
      ? "margin-bottom : -1.5px; transform:rotate(45deg);"
      : " margin-bottom: 15px"};
  background-color: white;
`;
export const ToggleDown = styled.div`
  width: 35px;
  height: 2px;
  background-color: white;
  ${props => props.active && "transform:rotate(-45deg);"};
`;
export const Toggle = styled.div`
  position: absolute;
  cursor: pointer;
  right: 100px;
  top: 60px;
  z-index: 999;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
