import styled from "styled-components";
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    ${props => props.active && "transform: translateX(-300px)"}
  }
  ${props => props.active && "transform: translateX(-400px)"}
`;
