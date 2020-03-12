import styled from "styled-components";
export const Bg = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px;
  position: relative;
  z-index: 2;
  background-color: #010001;
  transition: all ease 0.5s;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  ${props => props.active && "transform: translateX(-350px)"}
`;
