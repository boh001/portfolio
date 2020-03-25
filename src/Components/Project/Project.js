import React, { useCallback, useState } from "react";
import {
  ProjectName,
  ProjectDes,
  ReadMore,
  ProjectItem
} from "./Project.style";

export default ({ name, des }) => {
  const [active, setActive] = useState(false);
  const showDetail = useCallback(e => {
    setActive(!active);
  });
  return (
    <ProjectItem
      to={`/project/${name}`}
      onClick={e => showDetail(e)}
      active={active}
    >
      <ProjectName active={active}>{name}</ProjectName>
      <ProjectDes active={active}>{des}</ProjectDes>
      <ReadMore active={active}>Read More</ReadMore>
    </ProjectItem>
  );
};
