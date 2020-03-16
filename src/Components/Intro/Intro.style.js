import styled from "styled-components";
import { color, padding } from "../Global/variable";

export const ContentFrame = styled.div`
  width: 100%;
  margin-top: ${padding.content};
`;
export const Theme = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 30px;
  width: 100%;
`;
export const Name = styled.span`
  font-size: 35px;
  text-transform: uppercase;
  color: ${color.blue};
  width: 100%;
`;
export const Main = styled.p`
  font-size: 15px;
  word-wrap: break-word;
  word-break: keep-all;
  width: 100%;
`;
