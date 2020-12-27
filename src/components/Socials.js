import React from "react";
import styled from "styled-components";
import { Link } from "../constants/theme";

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

const Socials = ({ colour }) => {
  return (
    <>
      <SocialContainer colour={colour} id="social">
        <Link
          colour={colour}
          target="_blank"
          href="https://github.com/Daniel-Cross"
        >
          <ion-icon size="small" name="logo-github" />
        </Link>
        <Link
          colour={colour}
          target="_blank"
          href="https://www.linkedin.com/in/daniel-cross/"
        >
          <ion-icon size="small" name="logo-linkedin" />
        </Link>
        <Link
          colour={colour}
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+46730443833"
        >
          <ion-icon size="small" name="logo-whatsapp" />
        </Link>
        <Link
          colour={colour}
          target="_blank"
          href="https://twitter.com/DanCrossy"
        >
          <ion-icon size="small" name="logo-twitter" />
        </Link>
      </SocialContainer>
    </>
  );
};

export default Socials;
