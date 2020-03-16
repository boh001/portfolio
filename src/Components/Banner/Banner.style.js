import styled from "styled-components";
export const BannerFrame = styled.div`
  position: absolute;
  display: grid;
  grid-auto-columns: 50px;
  grid-auto-rows: 50px;
  grid-gap: 10px;
  right: 90px;
  @media screen and (max-width: 768px) {
    grid-auto-flow: column;
    left: 100px;
    bottom: 100px;
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
`;
