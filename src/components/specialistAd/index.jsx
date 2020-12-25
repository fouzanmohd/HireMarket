import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import farming from "../../images/farming.png";
import { Button } from "./../Button/index";

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 10em;
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 15px;
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 25px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
`;

const SpecialistImage = styled.div`
  width: 35em;
  height: 29em;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const SpecialistAd = (props) => {
  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo textSize={35} logoSize={45} />
          <SloganContainer>
            <Slogan>Are you an Expert?</Slogan>
            <Slogan>if yes, Join us</Slogan>
            <Slogan>and get employed!</Slogan>
          </SloganContainer>
          <Button size={13}>Join as Expert</Button>
        </SloganContainer>
        <SpecialistImage>
          <img src={farming} alt="" />
        </SpecialistImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
};
