import styled from "styled-components";
import { center } from "Components/Global/variable";
export const Bg = styled.div`
  width: 100%;
  padding: 100px;
  position: relative;
  z-index: 2;
  background-color: #010001;
  ${center};
  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 50px;
  }
  @media screen and (max-width: 478px) {
    font-size: 25px;
    padding: 20px;
  }
  ${props =>
    props.active && " transition: all ease 0.5s; transform: translateX(-500px)"}
`;
