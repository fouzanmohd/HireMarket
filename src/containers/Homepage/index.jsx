import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from './topSection';
import { NavBar } from './../../components/Navbar/index';
import styled from 'styled-components';
import { deviceSize } from './../../components/responsive/index';
import { Services } from './services';

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
    </InnerPageContainer>
  </PageContainer>);
};
