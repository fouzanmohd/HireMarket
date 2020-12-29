import React from 'react'
import { Footer } from '../footer'
import { NavBar } from '../Navbar'
import { InnerPageContainer, PageContainer } from '../pageContainer'
import { AccountBox } from './../accountBox/index';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledInnerpageContainer = styled(InnerPageContainer)`
    margin-top:3em;
`;

export const CustomerAccessPage = (props) => {
    const {action} = useParams()
    return <PageContainer>
        <NavBar/>
        <InnerPageContainer>
            <StyledInnerpageContainer>

            <AccountBox initialActive = {action}/>
            </StyledInnerpageContainer>
        </InnerPageContainer>
        <Footer/>
    </PageContainer>
}