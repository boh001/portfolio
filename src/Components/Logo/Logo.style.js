import styled from "styled-components";

export const LogoFrame = styled.div`
  position: absolute;
  top: 50px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
`;

export const ToggleUp = styled.div`
  width: 40px;
  height: 2px;
  ${props =>
    props.active
      ? "margin-bottom : -1.5px; transform:rotate(45deg);"
      : " margin-bottom: 20px"};
  background-color: white;
`;
export const ToggleDown = styled.div`
  width: 40px;
  height: 2px;
  background-color: white;
  ${props => props.active && "transform:rotate(-45deg);"};
`;
export const Toggle = styled.div`
  position: absolute;
  cursor: pointer;
  right: 100px;
  top: 60px;
`;
