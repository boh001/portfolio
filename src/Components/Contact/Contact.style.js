import styled from "styled-components";
import { center, color } from "Components/Global/variable";

export const Wrap = styled.div`
  position: relative;
  flex: none;
  width: 100%;
  height: 100%;
  ${center};
  margin-top: ${props => props.mt};
  flex-direction: column;
  color: #57606f;
`;
export const Form = styled.form.attrs({
  action: `mailto:boh001g@gmail.com`,
  method: "post",
  encType: "text/plain",
  acceptCharset: "EUC-KR",
  autoComplete: "off"
})`
  height: 1000px;
  width: 1000px;
  ${center};
  flex-direction: column;
`;

export const FormInput = styled.input.attrs(props => ({
  type: "text",
  placeholder: props.ph,
  name: "수신자"
}))`
  width: 60%;
  margin-bottom: 60px;
  font-size: 20px;
  ${props => props.write && "color:white; "}
  &::placeholder {
    color: inherit;
  }
  &:focus {
    color: white;
  }
`;

export const FormMsg = styled.textarea.attrs(props => ({
  placeholder: props.ph,
  name: "message"
}))`
  width: 60%;
  margin-top: 60px;
  font-size: 20px;
  ${props => props.write && "color:white;"}
  &::placeholder {
    color: inherit;
  }
  &:focus {
    color: white;
  }
`;
export const FormSubmit = styled.input.attrs({
  type: "submit",
  value: "Submit"
})`
  cursor: pointer;
  border: none;
  margin-top: 60px;
  margin-left: 500px;
  font-size: 30px;
  color: white;
  &:hover {
    color: ${color.blue};
  }
`;
export const Social = styled.div`
  margin-top: 60px;
  width: 50%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 100px;
  grid-auto-flow: column;
`;
export const SocialLink = styled.a.attrs(props => ({
  href: props.url,
  target: "_blank"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  &:hover {
    color: white;
  }
`;
export const Ment = styled.div`
  color: white;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 120px;
`;
