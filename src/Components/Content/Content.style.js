import styled from "styled-components";
import { center, color } from "Components/Global/variable";
export const Slider = styled.div`
  flex: none;
  width: 650px;
  height: ${props => `${props.h}px`};
  ${center};
  overflow: hidden;
  transition: all ease 1s;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 478px) {
    width: 280px;
  }
`;

export const Wrap = styled.div`
  flex: none;
  width: 800px;
  height: 100%;
  ${center};
  margin-top: ${props => props.mt};
  flex-direction: column;
`;
export const Frame = styled.div`
  flex: none;
  ${center};
  position: relative;
  width: 750px;
  height: 100%;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    width: 450px;
  }
  @media screen and (max-width: 478px) {
    margin-top: 100px;
    width: 300px;
  }
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
  @media screen and (max-width: 478px) {
    grid-auto-rows: row;
  }
`;
export const Prev = styled.div`
  cursor: pointer;
  font-size: 50px;
  top: ${props => `${props.top}px`};
  left: 0px;
  position: absolute;
  z-index: 2;
  ${props => props.margin === 0 && "display: none"}
  &:after {
    content: "<<";
  }
  @media screen and (max-width: 768px) {
    top: ${props => `${props.top - 40}px`};
    font-size: 40px;
  }
  @media screen and (max-width: 478px) {
    top: ${props => `${props.top - 90}px`};
    font-size: 25px;
  }
`;
export const Next = styled.div`
  cursor: pointer;
  font-size: 50px;
  top: ${props => `${props.top}px`};
  right: 0;
  position: absolute;
  z-index: 2;
  ${props => props.margin === -400 && "display: none"}
  &:after {
    content: ">>";
  }
  @media screen and (max-width: 768px) {
    top: ${props => `${props.top - 40}px`};
    font-size: 40px;
  }
  @media screen and (max-width: 478px) {
    top: ${props => `${props.top - 90}px`};
    font-size: 25px;
  }
`;
export const Theme = styled.div`
  font-size: 60px;
  color: ${color.blue};
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 478px) {
    font-size: 30px;
  }
`;
