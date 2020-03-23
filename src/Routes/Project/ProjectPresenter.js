import React from "react";
import { projects } from "project";
import Project from "Components/Project/Project";
import styled from "styled-components";
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 400px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 250px;
    margin-top: 100px;
  }
  @media screen and (max-width: 478px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    margin-top: 50px;
  }
`;
export default () => {
  return (
    <Wrap>
      {projects.map((p, key) => {
        return (
          <>
            <Project
              key={key}
              name={p.id}
              des={p.des}
              detail={p.detail}
              img={p.img}
              ctg={p.ctg}
              github={p.github}
              member={p.member}
              period={p.period}
            />
          </>
        );
      })}
    </Wrap>
  );
};
