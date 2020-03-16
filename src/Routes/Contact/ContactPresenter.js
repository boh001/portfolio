import styled from "styled-components";
import React from "react";
import { center, color } from "Components/Global/variable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";

export const Wrap = styled.div`
  flex: none;
  width: 100%;
  height: 100%;
  ${center};
  margin-top: ${props => props.mt};
  flex-direction: column;
  background-color: red;
`;
export const Form = styled.form`
  height: 100%;
  width: 500px;
  ${center};
  background-color: blue;
`;
export const Imge = styled.img.attrs({
  src:
    "https://cdn3.iconfinder.com/data/icons/instagram-18/512/186_Instagram_Compass_Navigation-512.png"
})`
  width: 100px;
  height: 100px;
  color: white;
`;
export default React.memo(() => {
  console.log("contact");
  return (
    <Wrap>
      <Form>
        <Imge />
      </Form>
    </Wrap>
  );
});
