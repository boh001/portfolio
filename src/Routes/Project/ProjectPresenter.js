import styled from "styled-components";
import React, { useRef, useCallback, useState } from "react";
import { padding, center, url, color } from "Components/Global/variable";

const ProjectSlider = styled.div`
  flex: none;
  position: relative;
  width: 500px;
  height: 350px;
  ${center};
  overflow: hidden;
  transition: all ease 1s;
`;

const ProjectFrame = styled.div`
  flex: none;
  position: relative;
  width: 100%;
  height: 100%;
  ${center};
  flex-direction: column;
  margin-top: ${padding.content};
`;

const ProjectItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 10px;
  width: 80%;
  height: 80%;
`;

const Project = styled.div`
  flex: none;
  width: 500px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  margin-left: ${props => props.first};
`;
const ProjectName = styled.div`
  font-weight: bold;

  font-size: 30px;
  font-weight: bold;
`;
const ProjectDes = styled.div`
  ${center};
  font-size: 11px;
  width: 140px;
  word-wrap: break-word;
  word-break: keep-all;
  margin: 20px 0px 20px 0px;
`;
const ReadMore = styled.div`
  font-size: 10px;
  ${center};
  width: 70px;
  height: 20px;
  color: white;
  background-color: ${color.blue};
`;
const ProjectItem = styled.div`
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
const Prev = styled.div`
  cursor: pointer;
  top: 175px;
  left: 0px;
  position: absolute;
  z-index: 2;
  &:after {
    content: "<<";
  }
  ${props => props.margin === 200 && "display: none"}
`;
const Next = styled.div`
  cursor: pointer;
  top: 175px;
  right: 0px;
  position: absolute;
  z-index: 2;
  &:after {
    content: ">>";
  }
  ${props => props.margin === -200 && "display: none"}
`;

export default () => {
  const [margin, setMargin] = useState(200);

  const prev = useCallback(e => {
    setMargin(margin + 200);
  });

  const next = useCallback(e => {
    setMargin(margin - 200);
  });
  return (
    <ProjectFrame>
      <ProjectSlider>
        <Prev margin={margin} onClick={e => prev(e)}></Prev>
        <Project first={`${margin}%`}>
          <ProjectItems>
            <ProjectItem>
              <ProjectName>1</ProjectName>
              <ProjectDes>Document Classification</ProjectDes>
              <ReadMore>Read More</ReadMore>
            </ProjectItem>

            <ProjectItem>
              <ProjectName>2</ProjectName>
              <ProjectDes>Normal map creation</ProjectDes>
              <ReadMore>Read More</ReadMore>
            </ProjectItem>
          </ProjectItems>
        </Project>
        <Project>
          <ProjectItems>
            <ProjectItem>
              <ProjectName>3</ProjectName>
              <ProjectDes>Low-dose-CT denoise</ProjectDes>
              <ReadMore>Read More</ReadMore>
            </ProjectItem>

            <ProjectItem>
              <ProjectName>4</ProjectName>
              <ProjectDes>MultiLabel Classfication</ProjectDes>
              <ReadMore>Read More</ReadMore>
            </ProjectItem>
          </ProjectItems>
        </Project>
        <Project>
          <ProjectItems>
            <ProjectItem>
              <ProjectName>5</ProjectName>
              <ProjectDes>Facebook Clone</ProjectDes>
              <ReadMore>Read More</ReadMore>
            </ProjectItem>

            <ProjectItem>
              <ProjectName>6</ProjectName>
              <ProjectDes>Weather-Todo-List</ProjectDes>
              <ReadMore>Read More</ReadMore>
            </ProjectItem>
          </ProjectItems>
        </Project>

        <Next margin={margin} onClick={e => next(e)}></Next>
      </ProjectSlider>
    </ProjectFrame>
  );
};
