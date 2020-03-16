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
  enctype: "text/plain",
  acceptCharset: "UTF-8",
  autoComplete: "off"
})`
  height: 100%;
  width: 500px;
  ${center};
  flex-direction: column;
`;

export const FormInput = styled.input.attrs(props => ({
  type: "text",
  placeholder: props.ph,
  name: "수신자"
}))`
  width: 60%;
  margin-bottom: 30px;
  ${props => props.write && "color:white;"}
  &::placeholder {
    color: #57606f;
  }
  &:focus {
    color: white;
  }
  &:focus::placeholder {
    color: white;
  }
`;

export const FormMsg = styled.textarea.attrs(props => ({
  placeholder: props.ph,
  name: "message"
}))`
  width: 60%;
  margin-top: 30px;
  ${props => props.write && "color:white;"}
  &::placeholder {
    color: #57606f;
  }
  &:focus {
    color: white;
  }
  &:focus::placeholder {
    color: white;
  }
`;
export const FormSubmit = styled.input.attrs({
  type: "submit",
  value: "Submit"
})`
  cursor: pointer;
  border: none;
  margin-top: 30px;
  margin-left: 245px;
  font-size: 15px;
  color: white;
  &:hover {
    color: ${color.blue};
  }
`;
export const Social = styled.div`
  margin-top: 30px;
  width: 50%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 50px;
  grid-auto-flow: column;
`;
export const SocialLink = styled.a.attrs(props => ({
  href: props.url,
  target: "_blank"
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
  }
`;
export const Ment = styled.div`
  color: ${color.blue};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
`;
