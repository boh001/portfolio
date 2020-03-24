import React, { useCallback, useState } from "react";
import {
  ProjectName,
  ProjectDes,
  ReadMore,
  ProjectItem
} from "./Project.style";

export default ({
  id,
  name,
  des,
  detail,
  img,
  ctg,
  github,
  member,
  period
}) => {
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
      <>
        <ProjectName active={active}>{name}</ProjectName>
        <ProjectDes active={active}>{des}</ProjectDes>
        <ReadMore active={active}>Read More</ReadMore>
      </>
    </ProjectItem>
  );
};
