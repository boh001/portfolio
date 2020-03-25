import styled from "styled-components";
import { center, color } from "Components/Global/variable";

export const ProjectDetail = styled.div`
  width: 1000px;
  height: 650px;
  color: white;
  z-index: 3;
  ${center}
  font-size: 100px;
  border-radius: 5px;
  margin-top: 50px;
  @media screen and (max-width: 1024px) {
    width: 700px;
    font-size: 90px;
    height: 750px;
  }
  @media screen and (max-width: 768px) {
    width: 480px;
    font-size: 80px;
    height: auto;
  }
  @media screen and (max-width: 478px) {
    width: 100%;
    font-size: 70px;
    height: auto;
  }
`;
export const DetailMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 478px) {
    flex-direction: column;
  }
`;
export const MainImg = styled.img.attrs(props => ({
  src: props.url
}))`
  padding: 10px;
  width: 40%;
  height: 100%;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 478px) {
    width: 100%;
  }
`;
export const MainDes = styled.div`
  padding: 10px 15px 10px 15px;
  width: 60%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 1fr 1fr 1fr 3fr;
  grid-auto-columns: minmax(auto, 1fr);
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 8fr;
    height: 50%;
    width: 100%;
  }
  @media screen and (max-width: 478px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 8fr;
    height: 50%;
    width: 100%;
    grid-gap: 10px;
  }
`;
export const MainName = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 0.25em;
`;
export const MainCtg = styled.div`
  display: flex;
  align-items: center;
  color: ${color.blue};
  text-transform: uppercase;
  font-size: 0.2em;
`;

export const MainGit = styled.div``;
export const MainMem = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.2em;
`;
export const MainPeriod = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.2em;
`;
export const MainDetail = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  word-wrap: break-word;
  word-break: keep-all;
  font-size: 0.2em;
  height: 100%;
  padding: 10px;
  line-height: 25px;
`;
export const DetailSub = styled.div`
  padding: 10px 0px 0px 10px;
  width: 100%;
  height: 25%;
`;
export const SocialLink = styled.a.attrs(props => ({
  href: props.url,
  target: "_blank"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;
export const Wrap = styled.div`
  z-index: 3;
  top: 150px;
  left: 100px;
  font-size: 30px;
  position: absolute;
  cursor: pointer;
  &:hover {
    color: ${color.blue};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 478px) {
    display: none;
  }
`;
