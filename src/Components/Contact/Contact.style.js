import styled from "styled-components";
import { center, color } from "Components/Global/variable";

export const Wrap = styled.div`
  position: relative;
  flex: none;
  width: 700px;
  height: 100%;
  font-size: 50px;
  ${center};
  margin-top: ${props => props.mt};
  flex-direction: column;
  color: #57606f;
  @media screen and (max-width: 768px) {
    margin-top: ${props => props.mt / 2};
    width: 400px;
  }
  @media screen and (max-width: 478px) {
    margin-top: ${props => props.mt / 4};
    width: 100%;
  }
`;
export const Form = styled.form.attrs({})`
  width: 100%;
  height: 100%;
  ${center};
  flex-direction: column;
`;

export const FormInput = styled.input.attrs(props => ({
  type: "text",
  placeholder: props.ph,
  name: props.name,
  autoComplete: "off"
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
  name: "message_html"
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
export const Send = styled.div`
  color: white;
  font-size: 6em;
  @media screen and (max-width: 768px) {
    font-size: 4em;
  }
  @media screen and (max-width: 478px) {
    font-size: 2em;
`;
export const Check = styled.span`
  font-size: 1em;
  margin: 80px 0px;
  text-transform: uppercase;
  color: ${props => (props.check ? `${color.blue};` : "red;")};
  @media screen and (max-width: 768px) {
    font-size: 0.75em;
  }
  @media screen and (max-width: 478px) {
    font-size: 0.5em;
  }
`;
export const Span = styled.span`
  font-size: 0.8em;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 0.6em;
  }
  @media screen and (max-width: 478px) {
    font-size: 0.4em;
  }
`;
