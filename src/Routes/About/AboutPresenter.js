import styled from "styled-components";
import React, { useCallback, useState } from "react";
import Content from "Components/Content/Content";
import { padding, center, url, color } from "Components/Global/variable";

const Skill = styled.div`
  width: 100%;
  height: 100%;
  ${center};
  flex-direction: column;
  cursor: pointer;
`;
const SkillName = styled.div`
  margin-top: 20px;
`;
const Skillitems = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 20px 20px;
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

export default React.memo(() => {
  return (
    <>
      <Content mt={"50px"} repeat={"3,100%"} theme={"My skills"}>
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

        <Skill>
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
              <ItemName>linux</ItemName>
              <Item>
                <Img url={url.linux} />
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
      </Content>
    </>
  );
});
