import React, { useState,useEffect } from "react";
import emailjs from "emailjs-com";
import {
  ContactSection,
  ContactHeader,
  Description,
  StyledForm,
  Label,
  Input,
  Textarea,
  SubmitButton,
  SocialIcons,
  SocialIcon,
} from "./ContactMe.styles";

import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const ContactMe = ({ msgAlert }) => {
  const [memberdatabase, setMemberdatabase] = useState({
    emailList: ["clapperdev@gmail.com"],
  });

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;
const fullText = `Thank you for visiting my music website. If you're interested in scheduling a lesson or booking me for an event, please contact me and I will respond as soon as possible. Thank you for your interest.`;

const [displayedText, setDisplayedText] = useState("");
const [index, setIndex] = useState(0);

useEffect(() => {
  if (index < fullText.length) {
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      setIndex((prev) => prev + 1);
    }, 40); // Speed of typing (ms per character)

    return () => clearTimeout(timeout);
  }
}, [index]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberdatabase((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      name: memberdatabase.name,
      emailList: memberdatabase.emailList.join(", "),
      message: memberdatabase.message,
      email: memberdatabase.email,
    };
    emailjs
      .send(serviceId, templateId, data, userId)
      .then(() => {
        msgAlert({
          heading: "Send Success",
          message: "Thanks!",
          variant: "info",
        });
        e.target.reset();
      })
      .catch(() => {
        msgAlert({
          heading: "Send Failure",
          message:
            "An error occurred while sending the email. Please try again later.",
          variant: "danger",
        });
      });
  };

  return (
    <ContactSection>
      <ContactHeader>Contact</ContactHeader>
<Description>
  {displayedText}
  <span className="blinking-caret">|</span>
</Description>


      <StyledForm onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input
          type="text"
          required
          name="name"
          placeholder="Your name"
          onChange={handleChange}
        />

        <Label>Email</Label>
        <Input
          type="email"
          required
          name="email"
          placeholder="Your email"
          onChange={handleChange}
        />

        <Label>Message</Label>
        <Textarea
          name="message"
          rows="4"
          required
          placeholder="Your message"
          onChange={handleChange}
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>

      <SocialIcons>
        <SocialIcon>
          <a href="mailto:clapperpianist@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="https://facebook.com/jacobrclapper"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="https://www.linkedin.com/in/jacob-clapper"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="https://www.youtube.com/channel/UCZdJrUGgra3dvMQdsDrOJ0g"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="https://www.instagram.com/clapperpianist/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialIcon>
      </SocialIcons>
    </ContactSection>
  );
};

export default ContactMe;
