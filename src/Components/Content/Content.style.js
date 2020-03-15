import styled from "styled-components";

const Frame = styled.div`
  flex: none;
  width: 100%;
  height: 100%;
  ${center};
  flex-direction: column;
  margin-top: ${padding.content};
`;
const Theme = styled.div`
  flex: none;
  font-size: 30px;
  margin-bottom: 50px;
  color: ${color.blue};
`;
const Slider = styled.div`
  flex: none;
  width: 400px;
  height: 350px;
  ${center};
  overflow: hidden;
  transition: all ease 1s;
`;
const Wrap = styled.div`
  flex: none;
  width: 400px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: all ease 1s;
  margin-left: ${props => props.first};
`;
const Name = styled.div``;
const items = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 0px 20px;
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
const item = styled.div`
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
  top: 200px;
  left: 50px;
  position: absolute;
  z-index: 2;
  &:after {
    content: "<<";
  }
  ${props => props.margin === 200 && "display: none"}
`;
const Next = styled.div`
  cursor: pointer;
  top: 200px;
  right: 50px;
  position: absolute;
  z-index: 2;
  &:after {
    content: ">>";
  }
  ${props => props.margin === -200 && "display: none"}
`;
