import React from "react";
import styled from "styled-components";
import { Link } from "../constants/theme";

const FooterContainer = styled.div`
  background: rgb(225, 225, 225, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer id="social">
        <Link href="https://github.com/Daniel-Cross">
          <ion-icon size="large" name="logo-github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/daniel-cross/
"
        >
          <ion-icon size="large" name="logo-linkedin" />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=+447736224134">
          <ion-icon size="large" name="logo-whatsapp" />
        </Link>
        <Link href="https://twitter.com/DanCrossy">
          <ion-icon size="large" name="logo-twitter" />
        </Link>
      </FooterContainer>
    </>
  );
};

export default Footer;
