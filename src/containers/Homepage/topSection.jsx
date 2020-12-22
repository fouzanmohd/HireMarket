import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TopSectionBestImg from "../../images/best-img.png";
import {Button} from '../../components/Button'
import { BrandLogo } from "./../../components/brandLogo/index";
const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -120px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 33em;
  height: 25em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Marginer=styled.div`
margin-top:15px
`;
const TopSectionText = styled.h3`
margin:0;
line-height:1.5;
font-weight:500;
font-size:28px;
color:#fff;
display:flex;
`;
export const TopSection = (props) => {
    const {children} = props
  return (
    <TopSectionContainer>
      <BackgroundFilter>
      {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo logoSize = {60} textSize={40} />
          <Marginer>
          <TopSectionText>Hire the best Professional</TopSectionText>
          <TopSectionText>depending on your need!</TopSectionText>
          </Marginer>
          <Marginer>

          <Button>Join Now</Button>
          </Marginer>
          </LogoContainer>
          <StandoutImage>
            <img src={TopSectionBestImg} alt="" />
          </StandoutImage>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
};
