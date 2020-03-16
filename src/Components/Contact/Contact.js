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
  const [write, setWrite] = useState(false);
  const OnWrite = useCallback(e => {
    setWrite(true);
  });
  return (
    <>
      <Wrap mt={"30px"}>
        <Form>
          <Ment>Contact Us</Ment>
          <FormInput
            write={write}
            ph={"Write your Name"}
            onChange={e => OnWrite(e)}
          />
          <FormInput
            write={write}
            ph={"Write your Email"}
            onChange={e => OnWrite(e)}
          />
          <FormMsg
            write={write}
            ph={"Write your message"}
            onChange={e => OnWrite(e)}
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
