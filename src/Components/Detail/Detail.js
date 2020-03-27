import React from "react";
import {
  ProjectDetail,
  MainName,
  DetailMain,
  MainImg,
  MainDes,
  MainCtg,
  MainDetail,
  MainMem,
  MainPeriod,
  Wrap
} from "./Detail.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { withRouter } from "react-router-dom";

export default withRouter(
  ({ history, name, img, ctg, detail, member, period }) => {
    const goBack = useCallback(e => {
      history.goBack();
    });

    return (
      <>
        <Wrap onClick={e => goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={"1x"} />
        </Wrap>
        <ProjectDetail>
          <DetailMain>
            <MainImg url={img} />
            <MainDes>
              <MainCtg>{ctg}</MainCtg>
              <MainName>{name}</MainName>
              <MainMem>{member}</MainMem>
              <MainPeriod>{period}</MainPeriod>
              <MainDetail>{detail}</MainDetail>
            </MainDes>
          </DetailMain>
        </ProjectDetail>
      </>
    );
  }
);
