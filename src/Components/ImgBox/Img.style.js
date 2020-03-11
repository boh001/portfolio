import styled from "styled-components";
export const Img = styled.img.attrs(props =>({
    src= props.src
}))`
  border: 1px solid white;
`;
