import styled from "styled-components";
import React from "react";

const ImgFrame = styled.div`
  display:grid;
  width:100%;
  grid-template-rows: repeat(1, 3fr)
  background-color: red;
`;
const Frontend = styled.div``;
const Backend = styled.div``;
const Database = styled.div``;

export default () => {
  return (
    <ImgFrame>
      <Frontend>Frontend</Frontend>
      <Backend>Backend</Backend>
      <Database>Database</Database>
    </ImgFrame>
  );
};
