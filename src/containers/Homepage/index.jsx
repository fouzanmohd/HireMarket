import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from './topSection';
import { NavBar } from './../../components/Navbar/index';
import styled from 'styled-components';
import { deviceSize } from './../../components/responsive/index';
import { ServiceCard } from './../../components/serviceCard/index';

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

const services = {
  "id": 3,
  "title": "I will cut grass for you",
  "thumbnailUrl": "http://localhost:9000/grass.jpg",
  "rating": 5,
  "specialist": { "id": 1, "fullName": "Spencer Roney" },
  "rate": 19
}
export const Homepage = (props) => {
  return (<PageContainer>
    <TopSection>
      <NavBar />
    </TopSection>
    <InnerPageContainer>
      <ContentContainer>
      <Title>Most Used Services</Title>
      <ServiceCard {...services}/>
    </ContentContainer>
    </InnerPageContainer>
  </PageContainer>);
};
