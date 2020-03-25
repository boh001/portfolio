import React from "react";
import Detail from "Components/Detail/Detail";
export default ({ project }) => {
  const { des, img, ctg, detail, member, period } = project[0];
  console.log(project);

  return (
    <Detail
      name={des}
      img={img}
      ctg={ctg}
      detail={detail}
      member={member}
      period={period}
    />
  );
};
