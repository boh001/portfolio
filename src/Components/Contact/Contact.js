import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  Wrap,
  Form,
  FormInput,
  FormMsg,
  FormSubmit,
  Social,
  SocialLink,
  Ment,
  Send,
  Check,
  Span
} from "./Contact.style";
import emailjs from "emailjs-com";
import dotenv from "dotenv";
dotenv.config();

export default () => {
  const [writeName, setWriteName] = useState(false);
  const OnWriteName = useCallback(e => {
    setWriteName(true);
  });
  const [writeEmail, setWriteEmail] = useState(false);
  const OnWriteEmail = useCallback(e => {
    setWriteEmail(true);
  });
  const [writeMsg, setWriteMsg] = useState(false);
  const [send, setSend] = useState({ send: false, check: "Fail" });
  const OnWriteMsg = useCallback(e => {
    setWriteMsg(true);
  });
  const autoSize = useCallback(e => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  });
  console.log(process.env.SERVICE);

  const sendEmail = useCallback(e => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE || "default_service",
        process.env.TEMPLATE_ID || "template_T1Y6Vhzx",
        e.target,
        process.env.USER_ID || "user_qWz9or4JUrMBUYU5D4gbL"
      )
      .then(
        result => {
          setSend({ send: true, check: true });
          console.log(result.text);
        },
        error => {
          setSend({ send: true, check: false });
          console.log(error.text);
        }
      );
  });
  return (
    <>
      <Wrap mt={"100px"}>
        {send.send ? (
          <>
            <Send>
              <FontAwesomeIcon icon={faPaperPlane} />
            </Send>
            {send.check ? (
              <>
                <Check check={send.check}>Success!!</Check>
                <Span>Thanks, I will reply soon...</Span>
              </>
            ) : (
              <>
                <Check check={send.check}>Fail!!</Check>
                <Span>Please try again...</Span>
              </>
            )}
          </>
        ) : (
          <Form onSubmit={e => sendEmail(e)}>
            <Ment>Contact Us</Ment>
            <FormInput
              write={writeName}
              name={"from_name"}
              ph={"Write your Name"}
              onChange={e => OnWriteName(e)}
            />
            <FormInput
              write={writeEmail}
              ph={"Write your Email"}
              name={"contact_email"}
              onChange={e => OnWriteEmail(e)}
            />
            <FormMsg
              write={writeMsg}
              ph={"Write your message"}
              onChange={e => OnWriteMsg(e)}
              onKeyDown={e => autoSize(e)}
            />
            <FormSubmit />
            <Social>
              <SocialLink
                url={"https://www.facebook.com/profile.php?id=100004682232589"}
              >
                <FontAwesomeIcon icon={faFacebookF} size={"lg"} />
              </SocialLink>

              <SocialLink
                url={"https://www.instagram.com/sanghyeon3751/?hl=ko"}
              >
                <FontAwesomeIcon icon={faInstagram} size={"lg"} />
              </SocialLink>
              <SocialLink url={"https://www.github.com/boh001"}>
                <FontAwesomeIcon icon={faGithub} size={"lg"} />
              </SocialLink>
            </Social>
          </Form>
        )}
      </Wrap>
    </>
  );
};
