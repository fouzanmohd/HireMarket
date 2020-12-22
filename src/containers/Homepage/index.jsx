import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from './topSection';
import { NavBar } from './../../components/Navbar/index';
export const Homepage = (props) => {
  return (<PageContainer>
    <TopSection>
      <NavBar />
    </TopSection>
  </PageContainer>);
};
