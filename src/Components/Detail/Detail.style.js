import styled from "styled-components";
import { center, color } from "Components/Global/variable";

export const ProjectDetail = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  color: black;
  z-index: 3;
  top: 170px;
  left: 0;
  ${center}
  background-color: white;
  padding: 30px 10px 30px 10px;
  flex-direction: column;
  font-size: 24px;
  border-radius: 5px;
`;
export const DetailMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const MainImg = styled.img.attrs(props => ({
  src: props.url
}))`
  padding: 10px;
  width: 35%;
  height: 100%;
  background-size: cover;
`;
export const MainDes = styled.div`
  padding: 10px 15px 10px 15px;
  width: 65%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 3fr;
  grid-auto-columns: minmax(auto, 100%);
`;
export const MainName = styled.div`
  font-weight: bold;
`;
export const MainCtg = styled.div`
  color: ${color.blue};
  text-transform: uppercase;
  font-size: 20px;
`;

export const MainGit = styled.div``;
export const MainMem = styled.div`
  text-transform: uppercase;
`;
export const MainPeriod = styled.div``;
export const MainDetail = styled.div`
  word-wrap: break-word;
  word-break: keep-all;
  font-size: 20px;
  height: 100%;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 100px;
  position: absolute;
  ${center};
  background-color: black;
`;
