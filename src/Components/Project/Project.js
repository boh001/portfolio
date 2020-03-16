import React, { useCallback, useState } from "react";
import {
  ProjectName,
  ProjectDes,
  ReadMore,
  ProjectItem
} from "./Project.style";
import ProjectDetail from "Components/Detail/Detail";
export default ({ name, des }) => {
  const [active, setActive] = useState(false);
  const showDetail = useCallback(e => {
    setActive(!active);
  });
  return (
    <ProjectItem onClick={e => showDetail(e)} active={active}>
      {active ? (
        <ProjectDetail />
      ) : (
        <>
          <ProjectName active={active}>{name}</ProjectName>
          <ProjectDes active={active}>{des}</ProjectDes>
          <ReadMore>Read More</ReadMore>
        </>
      )}
    </ProjectItem>
  );
};
