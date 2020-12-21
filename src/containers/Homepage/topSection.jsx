import React from 'react';
import styled from 'styled-components'
import TopSectionBackgroundImg from '../../images/landing-page.jpg'
const TopSectionContainer = styled.div`
width: 100%;
height:600px;
background:url(${TopSectionBackgroundImg});
background-position: 0px -50px;
background-size: cover;
`;
export const TopSection = () => {

    return <TopSectionContainer>Hello from Top Section</TopSectionContainer>
}