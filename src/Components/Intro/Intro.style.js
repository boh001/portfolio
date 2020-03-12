import styled from "styled-components";
import { color, padding } from "../Global/variable";

export const ContentFrame = styled.div`
  margin-top: ${padding.content};
`;
export const Theme = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 30px;
`;
export const Name = styled.span`
  font-size: 35px;
  text-transform: uppercase;
  color: ${color.blue};
`;
export const Main = styled.p`
  font-size: 15px;
`;
