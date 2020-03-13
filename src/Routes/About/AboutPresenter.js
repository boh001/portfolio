import styled from "styled-components";
import React, { useCallback, useRef, useState } from "react";
import { padding, center, url, color } from "Components/Global/variable";

const SkillFrame = styled.div`
  flex: none;
  position: relative;
  width: 100%;
  height: 100%;
  ${center};
  flex-direction: column;
  margin-top: ${padding.content};
`;
const SkillTheme = styled.div`
  flex: none;
  font-size: 30px;
  margin-bottom: 50px;
  color: ${color.blue};
`;
const SkillSlider = styled.div`
  flex: none;
  position: relative;
  width: 500px;
  height: 350px;
  ${center};
  overflow: hidden;
  transition: all ease 1s;
`;
const Skill = styled.div`
  flex: none;
  width: 500px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: all ease 1s;
`;
const SkillName = styled.div``;
const Skillitems = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 70px;
  padding: 40px 100px 100px 100px;
  width: 100%;
  height: 100%;
`;
const ItemName = styled.div`
  ${center};
  margin-bottom: 10px;
  text-transform: uppercase;
  visibility: hidden;
  opacity: 0;
  font-size: 10px;
  transition: all ease 0.5s;
`;
const Skillitem = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover ${ItemName} {
    visibility: visible;
    opacity: 1;
  }
`;

const Item = styled.div`
  ${center};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #a4b0be;
`;
const Img = styled.img.attrs(props => ({
  src: props.url
}))`
  width: 55%;
  height: 55%;
  object-fit: cover;
`;

const Prev = styled.div`
  cursor: pointer;
  top: 135px;
  left: 0px;
  position: absolute;
  z-index: 2;
  &:after {
    content: "<<";
  }
  ${props => props.page === -1 && "display: none"}
`;
const Next = styled.div`
  cursor: pointer;
  top: 135px;
  right: 0px;
  position: absolute;
  z-index: 2;
  &:after {
    content: ">>";
  }
  ${props => props.page === 1 && "display: none"}
`;
export default () => {
  let [page, setPage] = useState(0);
  const slider1 = useRef();
  const slider2 = useRef();

  const prev = useCallback(e => {
    setPage(--page);
    if (page === 0) {
      slider1.current.style.marginLeft = "0";
      slider2.current.style.marginRight = "0";
    } else if (page === 1) {
      slider1.current.style.marginLeft = " 0%";
      slider2.current.style.marginRight = " 200%";
    } else {
      slider1.current.style.marginLeft = "200%";
      slider2.current.style.marginRight = "0%";
    }
  });
  const next = useCallback(e => {
    setPage(++page);
    if (page === 0) {
      slider2.current.style.marginRight = "0";
      slider1.current.style.marginLeft = "0";
    } else if (page === 1) {
      slider2.current.style.marginRight = " 200%";
      slider1.current.style.marginLeft = " 0%";
    } else {
      slider2.current.style.marginRight = "0%";
      slider1.current.style.marginLeft = "200%";
    }
  });
  return (
    <SkillFrame>
      <SkillTheme>My skills</SkillTheme>
      <SkillSlider>
        <Prev onClick={e => prev(e)} page={page}></Prev>
        <Skill ref={slider1}>
          <SkillName>Back-end</SkillName>
          <Skillitems>
            <Skillitem>
              <ItemName>nodejs</ItemName>
              <Item>
                <Img url={url.nodejs} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
          </Skillitems>
        </Skill>
        <Skill>
          <SkillName>Front-end</SkillName>
          <Skillitems>
            <Skillitem>
              <ItemName>html5</ItemName>
              <Item>
                <Img url={url.html} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>css3</ItemName>
              <Item>
                <Img url={url.css} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>es6</ItemName>
              <Item>
                <Img url={url.js} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>reactjs</ItemName>
              <Item>
                <Img url={url.react} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
          </Skillitems>
        </Skill>
        <Skill ref={slider2}>
          <SkillName>Others</SkillName>
          <Skillitems>
            <Skillitem>
              <ItemName>mongo</ItemName>
              <Item>
                <Img url={url.mongo} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>webpack</ItemName>
              <Item>
                <Img url={url.webpack} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>pytorch</ItemName>
              <Item>
                <Img url={url.pytorch} />
              </Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
            <Skillitem>
              <ItemName>none</ItemName>
              <Item></Item>
            </Skillitem>
          </Skillitems>
        </Skill>
        <Next onClick={e => next(e)} page={page}></Next>
      </SkillSlider>
    </SkillFrame>
  );
};