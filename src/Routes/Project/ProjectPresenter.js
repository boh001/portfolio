import styled from "styled-components";
import React from "react";
import { padding, center, url, color } from "Components/Global/variable";

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
  flex: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 160px;
  grid-gap: 20px;
  width: 500px;
  height: 350px;
  align-items: center;
  justify-items: center;
`;
const ProjectItem = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    height: 117.5px;
  }
`;
export default () => {
  return (
    <ProjectFrame>
      <ProjectItems>
        <ProjectItem src={url.nlp} />
        <ProjectItem src={url.normalMap} />
        <ProjectItem src={url.denosing} />
        <ProjectItem src={url.brain} />
        <ProjectItem src={""} />
        <ProjectItem src={""} />
      </ProjectItems>
    </ProjectFrame>
  );
};
