import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 2em 3em;
  border-top: solid 0.6px rgba(0, 10, 0, 0.3);
  margin-top: 5em;
  padding-bottom: 0;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 5%;
  }
`;

const BottomContainer = styled.div`
  height: 70px;
  display: flex;
  padding: 0 10px;
  border-top: solid 0.6px rgba(0, 10, 0, 0.3);
  justify-content: space-between;
  margin-top: 2em;
`;

const RightBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: 900;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  font-size: 11px;
  color: #afafaf;
  margin: 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 0.8s, ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }
`;
export const Footer = (props) => {
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Categories</Title>
          <FooterLink>Web Development</FooterLink>
          <FooterLink>Logo Design</FooterLink>
          <FooterLink>UI Design</FooterLink>
          <FooterLink>Digital Marketing</FooterLink>
          <FooterLink>Software developement</FooterLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Access</Title>
          <FooterLink>Log in</FooterLink>
          <FooterLink>Sign up</FooterLink>
          <FooterLink>Login as Expert</FooterLink>
          <FooterLink>Become an Expert</FooterLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo
            logoSize={30}
            textSize={40}
            hideLogo
            color={"rgba(0,0,0,0.2)"}
          />
          <PrivacyText>&#169; All rights reserved</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
};
