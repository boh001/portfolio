import styled from "styled-components";
import { center, color } from "Components/Global/variable";
export const Slider = styled.div`
  flex: none;
  width: 768px;
  height: ${props => `${props.h}px`};
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
  flex: none;
  ${center};
  position: relative;
  width: 100%;

  height: 100%;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  ${center};
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
  font-size: 50px;
  top: ${props => `${props.top}px`};
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
  font-size: 50px;
  top: ${props => `${props.top}px`};
  right: 0;
  position: absolute;
  z-index: 2;
  &:after {
    content: ">>";
  }
  ${props => props.margin === -400 && "display: none"}
`;
export const Theme = styled.div`
  font-size: 60px;
  color: ${color.blue};
  margin-bottom: 80px;
  @media screen and (max-width: 1024px) {
    color: red;
  }
`;
