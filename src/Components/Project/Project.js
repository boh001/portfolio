import React, { useCallback, useState } from "react";
import {
  ProjectName,
  ProjectDes,
  ReadMore,
  ProjectItem
} from "./Project.style";
import Detail from "Components/Detail/Detail";

export default ({ name, des, detail, img, ctg, github, member, period }) => {
  const [active, setActive] = useState(false);
  const showDetail = useCallback(e => {
    setActive(!active);
  });
  return (
    <ProjectItem onClick={e => showDetail(e)} active={active}>
      {active ? (
        <Detail
          name={des}
          detail={detail}
          img={img}
          ctg={ctg}
          github={github}
          member={member}
          period={period}
        />
      ) : (
        <>
          <ProjectName active={active}>{name}</ProjectName>
          <ProjectDes active={active}>{des}</ProjectDes>
          <ReadMore active={active}>Read More</ReadMore>
        </>
      )}
    </ProjectItem>
  );
};
