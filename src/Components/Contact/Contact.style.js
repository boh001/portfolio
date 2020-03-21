import styled from "styled-components";
import { center, color } from "Components/Global/variable";

export const Wrap = styled.div`
  position: relative;
  flex: none;
  width: 700px;
  min-height: 100vh;
  font-size: 50px;
  ${center};
  margin-top: ${props => props.mt};
  flex-direction: column;
  color: #57606f;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
    width: 460px;
  }
  @media screen and (max-width: 478px) {
    padding-top: 50px;
    width: 310px;
  }
`;
export const Form = styled.form.attrs({
  action: `mailto:boh001g@gmail.com`,
  method: "post",
  encType: "text/plain",
  acceptCharset: "EUC-KR",
  autoComplete: "off"
})`
  width: 100%;
  height: 100%;
  ${center};
  flex-direction: column;
`;

export const FormInput = styled.input.attrs(props => ({
  type: "text",
  placeholder: props.ph,
  name: "수신자"
}))`
  width: 80%;
  margin-bottom: 60px;
  font-size: 0.4em;
  ${props => props.write && "color:white; "}
  &::placeholder {
    color: inherit;
  }
  &:focus {
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.3em;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 478px) {
    font-size: 0.25em;
    margin-bottom: 20px;
  }
`;

export const FormMsg = styled.textarea.attrs(props => ({
  placeholder: props.ph,
  name: "message"
}))`
  width: 80%;
  margin-top: 60px;
  font-size: 0.4em;
  ${props => props.write && "color:white;"}
  &::placeholder {
    color: inherit;
  }
  &:focus {
    color: white;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    font-size: 0.3em;
  }
  @media screen and (max-width: 478px) {
    margin-top: 20px;
    font-size: 0.25em;
  }
`;
export const FormSubmit = styled.input.attrs({
  type: "submit",
  value: "Submit"
})`
  cursor: pointer;
  border: none;
  margin-top: 60px;
  font-size: 0.6em;
  color: white;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    color: ${color.blue};
  }
  @media screen and (max-width: 768px) {
    font-size: 0.5em;
    margin-top: 30px;
  }
  @media screen and (max-width: 478px) {
    margin-top: 30px;
    font-size: 0.4em;
  }
`;
export const Social = styled.div`
  margin-top: 60px;
  width: 50%;
  display: grid;
  font-size: 0.6em;
  grid-auto-columns: 1fr;
  grid-auto-rows: 100px;
  grid-auto-flow: column;
  @media screen and (max-width: 768px) {
    font-size: 0.5em;
    margin-top: 20px;
  }
  @media screen and (max-width: 478px) {
    margin-top: 15px;
    font-size: 0.4em;
  }
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
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 120px;
  @media screen and (max-width: 768px) {
    font-size: 0.6em;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 478px) {
    font-size: 0.5em;
    margin-bottom: 50px;
  }
`;
