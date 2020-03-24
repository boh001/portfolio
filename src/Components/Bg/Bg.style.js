import styled from "styled-components";
import { center } from "Components/Global/variable";
export const Bg = styled.div`
  width: 100%;
  padding: 100px;
  position: relative;
  z-index: 2;
  background-color: #010001;
  min-height: 100vh;
  transition: all ease 0.5s;
  ${center};
  @media screen and (min-width: 769px) {
    ${props => props.active && "transform: translateX(-500px)"}
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 50px;
  }
  @media screen and (max-width: 478px) {
    font-size: 25px;
    padding: 20px;
  }
`;
