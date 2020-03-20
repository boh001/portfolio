import styled from "styled-components";
export const BannerFrame = styled.div`
  position: absolute;
  display: grid;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
  grid-gap: 10px;
  right: 90px;
  top: 500px;
  font-size: 35px;
  @media screen and (max-width: 768px) {
    grid-auto-flow: column;
    top: 1000px;
    left: 100px;
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
`;
