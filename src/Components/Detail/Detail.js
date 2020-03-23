import React from "react";
import {
  ProjectDetail,
  MainName,
  DetailSub,
  DetailMain,
  MainImg,
  MainDes,
  MainCtg,
  MainDetail,
  MainMem,
  MainPeriod,
  SocialLink,
  Wrap
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default ({ name, img, ctg, detail, member, period }) => {
  console.log(img);

  return (
    <ProjectDetail>
      <DetailMain>
        <MainImg url={img} />
        <MainDes>
          <MainCtg>{ctg}</MainCtg>
          <MainName>{name}</MainName>
          <MainMem>{member}</MainMem>
          <MainPeriod>{period}</MainPeriod>
          {/* <SocialLink url={github}>
            <FontAwesomeIcon icon={faGithub} size={"4x"} />
          </SocialLink> */}
          <MainDetail>
            {detail}
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
          </MainDetail>
        </MainDes>
      </DetailMain>
      {/* <DetailSub></DetailSub> */}
    </ProjectDetail>
  );
};
