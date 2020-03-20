import styled from "styled-components";
import { center, color } from "Components/Global/variable";

export const ProjectName = styled.div`
  font-weight: bold;
  font-size: 60px;
  font-weight: bold;
`;
export const ProjectDes = styled.div`
  ${center};
  font-size: 20px;
  width: 250px;
  word-wrap: break-word;
  word-break: keep-all;
  margin: 40px 0px 40px 0px;
`;
export const ReadMore = styled.div`
  font-size: 20px;
  ${center};
  width: 140px;
  height: 40px;
  color: white;
  background-color: ${color.blue};
`;
export const ProjectItem = styled.div`
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
`;
