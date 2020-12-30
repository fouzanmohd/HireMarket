import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import farming from "../../images/farming.png";
import { Button } from "./../Button/index";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from './../responsive/index';

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
  justify-content: ${({isMobile})=> isMobile? "center" : "space-evenly"};
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 15px;
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: ${({isMobile})=> isMobile? "8px" : "25px"};
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
`;

const SpecialistImage = styled.div`
  width: 35em;
  height: 29em;
  margin-left: 20em;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const SpecialistAd = (props) => {
  const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
  console.log(isMobile)

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo textSize={isMobile? 20: 35} logoSize={isMobile? 25: 45} />
          <SloganContainer>
            <Slogan>Are you an Expert?</Slogan>
            <Slogan>if yes, Join us</Slogan>
            <Slogan>and get employed!</Slogan>
          </SloganContainer>
          <Button size={13}>Join as Expert</Button>
        </SloganContainer>
        {!isMobile && <SpecialistImage>
          <img src={farming} alt="" />
        </SpecialistImage>}
      </ContentContainer>
    </SpecialistAdContainer>
  );
};
