import styled from "styled-components";
import { center } from "Components/Global/variable";
export const Bg = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  position: relative;
  z-index: 2;
  background-color: #010001;
  ${center};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  ${props =>
    props.active && " transition: all ease 0.5s; transform: translateX(-500px)"}
`;
