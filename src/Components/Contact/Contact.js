import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  Wrap,
  Form,
  FormInput,
  FormMsg,
  FormSubmit,
  Social,
  SocialLink,
  Ment
} from "./Contact.style";
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
  const OnWriteMsg = useCallback(e => {
    setWriteMsg(true);
  });
  return (
    <>
      <Wrap mt={"100px"}>
        <Form>
          <Ment>Contact Us</Ment>
          <FormInput
            write={writeName}
            ph={"Write your Name"}
            onChange={e => OnWriteName(e)}
          />
          <FormInput
            write={writeEmail}
            ph={"Write your Email"}
            onChange={e => OnWriteEmail(e)}
          />
          <FormMsg
            write={writeMsg}
            ph={"Write your message"}
            onChange={e => OnWriteMsg(e)}
          />
          <FormSubmit />
          <Social>
            <SocialLink
              url={"https://www.facebook.com/profile.php?id=100004682232589"}
            >
              <FontAwesomeIcon icon={faFacebookF} size={"lg"} />
            </SocialLink>

            <SocialLink url={"https://www.instagram.com/sanghyeon3751/?hl=ko"}>
              <FontAwesomeIcon icon={faInstagram} size={"lg"} />
            </SocialLink>
            <SocialLink url={"https://www.github.com/boh001"}>
              <FontAwesomeIcon icon={faGithub} size={"lg"} />
            </SocialLink>
          </Social>
        </Form>
      </Wrap>
    </>
  );
};
