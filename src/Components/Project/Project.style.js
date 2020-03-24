import styled from "styled-components";
import { center, color } from "Components/Global/variable";
import { Link } from "react-router-dom";

export const ProjectName = styled.div`
  font-weight: bold;
  font-size: 0.6em;
  font-weight: bold;
`;
export const ProjectDes = styled.div`
  ${center};
  font-size: 0.2em;
  width: 100%;
  word-wrap: break-word;
  word-break: keep-all;
  margin: 40px 0px 40px 0px;
  @media screen and (max-width: 478px) {
    margin: 20px 0px 20px 0px;
  }
`;
export const ReadMore = styled.div`
  font-size: 0.2em;
  ${center};
  width: 140px;
  height: 40px;
  color: white;
  background-color: ${color.blue};
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 30px;
  }
  @media screen and (max-width: 478px) {
    width: 80px;
    height: 25px;
  }
`;
export const ProjectItem = styled(Link)`
  font-size: 100px;
  width: 100%;
  height: 100%;
  ${center};
  flex-direction: column;
  cursor: pointer;
  color: white;
  background-color: black;
  transition: all ease 0.5s;
  &:hover {
    background-color: white;
    color: black;
  }
  &:hover ${ReadMore} {
    background-color: black;
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
  @media screen and (max-width: 478px) {
    font-size: 40px;
  }
`;
