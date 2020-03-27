import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: rgb(224, 224, 224);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
`;
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ion-icon size="large" name="logo-github" />
        <ion-icon size="large" name="logo-linkedin" />
        <ion-icon size="large" name="logo-whatsapp" />
        <ion-icon size="large" name="logo-twitter" />
      </FooterContainer>
    </>
  );
};

export default Footer;
