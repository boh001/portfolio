import styled from "styled-components";
import { color, padding } from "../Global/variable";

export const ContentFrame = styled.div`
  width: 100%;
  min-height: 100%;
  margin-top: ${padding.content};
  font-size: 50px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 478px) {
    font-size: 25px;
  }
`;
export const Theme = styled.div`
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 30px;
  width: 100%;
`;
export const Name = styled.span`
  font-size: 1.4em;
  text-transform: uppercase;
  color: ${color.blue};
  width: 100%;
`;
export const Main = styled.p`
  font-size: 0.6em;
  word-wrap: normal;
  word-break: normal;
  width: 50%;
  line-height: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
