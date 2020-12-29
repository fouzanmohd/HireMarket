import React from 'react'
import { Footer } from '../footer'
import { NavBar } from '../Navbar'
import { InnerPageContainer, PageContainer } from '../pageContainer'
import { AccountBox } from './../accountBox/index';

export const CustomerAccessPage = (props) => {
    return <PageContainer>
        <NavBar/>
        <InnerPageContainer>
            <AccountBox/>
        </InnerPageContainer>
        <Footer/>
    </PageContainer>
}