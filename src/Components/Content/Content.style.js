import styled from "styled-components";
import { padding, center, color } from "Components/Global/variable";
export const Slider = styled.div`
  flex: none;
  width: 400px;
  height: 350px;
  ${center};
  overflow: hidden;
  transition: all ease 1s;
`;

export const Wrap = styled.div`
  flex: none;
  width: 100%;
  height: 100%;
  ${center};
  margin-top: ${props => props.mt};
  flex-direction: column;
`;
export const Frame = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  ${center};
  flex-direction: column;
`;
export const Content = styled.div`
  flex: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  margin-left: ${props => props.first};
`;
export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.repeat});
  grid-auto-rows: 1fr;
  grid-auto-rows: column;
  width: 100%;
  height: 100%;
`;
export const Prev = styled.div`
  cursor: pointer;
  top: 200px;
  left: 0px;
  position: absolute;
  z-index: 2;
  &:after {
    content: "<<";
  }
  ${props => props.margin === 0 && "display: none"}
`;
export const Next = styled.div`
  cursor: pointer;
  top: 200px;
  right: 0px;
  position: absolute;
  z-index: 2;
  &:after {
    content: ">>";
  }
  ${props => props.margin === -400 && "display: none"}
`;
export const Theme = styled.div`
  flex: none;
  font-size: 30px;
  color: ${color.blue};
  margin-bottom: 20px;
`;
