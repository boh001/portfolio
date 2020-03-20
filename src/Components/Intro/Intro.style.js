import styled from "styled-components";
import { color, padding } from "../Global/variable";

export const ContentFrame = styled.div`
  width: 100%;
  height: 1000px;
  margin-top: ${padding.content};
`;
export const Theme = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 30px;
  width: 100%;
`;
export const Name = styled.span`
  font-size: 70px;
  text-transform: uppercase;
  color: ${color.blue};
  width: 100%;
`;
export const Main = styled.p`
  font-size: 30px;
  word-wrap: normal;
  word-break: normal;
  width: 50%;
  line-height: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
