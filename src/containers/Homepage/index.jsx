import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from './topSection';
import { NavBar } from './../../components/Navbar/index';
import styled from 'styled-components';
import { deviceSize } from './../../components/responsive/index';
import { Services } from './services';
import { SpecialistAd } from './../../components/specialistAd/index';

const Title = styled.h1`
font-weight: 900;
color: #000;
`;

const ContentContainer = styled.div`
width:100%;
max-width: ${deviceSize.laptop}px;
display:flex;
flex-direction:column;
align-items: flex-start; 
padding: 1em;
margin-bottom: 40px;
`;

export const Homepage = (props) => {
  return (<PageContainer>
    <TopSection>
      <NavBar />
    </TopSection>
    <InnerPageContainer>
      <ContentContainer>
        <Services/>
    </ContentContainer>
    <SpecialistAd/>
  
    </InnerPageContainer>
  </PageContainer>);
};
