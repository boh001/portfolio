import styled from "styled-components";
export const BannerFrame = styled.div`
  position: absolute;
  display: grid;
  grid-gap: 10px;
  font-size: 35px;
  @media screen and (min-width: 768px) {
    grid-auto-columns: 100px;
    grid-auto-rows: 100px;
    right: 4.5%;
    top: 40%;
  }
  @media screen and (max-width: 768px) {
    grid-auto-columns: 70px;
    grid-auto-rows: 70px;
    grid-auto-flow: column;
    bottom: 0;
    font-size: 25px;
    left: 50%;
  }
  @media screen and (max-width: 478px) {
    grid-auto-columns: 1fr;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 20px;
    grid-gap: 0;
    left: 0;
    grid-auto-rows: 50px;
  }
`;
export const SocialLink = styled.a.attrs(props => ({
  href: props.url,
  target: "_blank"
}))`
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
  }
  @media screen and (max-width: 478px) {
    border: none;
  }
`;
