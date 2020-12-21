import React from 'react';
import styled from 'styled-components'
import TopSectionBackgroundImg from '../../images/landing-page.jpg'
import TopSectionBestImg from '../../images/best-img.png'
import { BrandLogo } from './../../components/brandLogo/index';
const TopSectionContainer = styled.div`
width: 100%;
height: 700px;
background:url(${TopSectionBackgroundImg});
background-position: 0px -120px;
background-size: cover;
`;

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color:rgba(38,70,83,0.9);
display:flex;
flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
justify-content: space-evenly;
`;

const StandoutImage = styled.div`
width: 37em;
height:29em;

img{
    width:100%;
    height:100%;
}
`;

const LogoContainer = styled.div`
display:flex;
flex-direction: column`;
const Title = styled.h2`
margin: 0;
font-size:24px;
line-height:1.7;
color:#fff;
`;
export const TopSection = () => {

    return <TopSectionContainer>
        <BackgroundFilter>
          <LogoContainer><BrandLogo /></LogoContainer>
            <StandoutImage><img src={TopSectionBestImg} alt=""/></StandoutImage>
        </BackgroundFilter>
    </TopSectionContainer>
}