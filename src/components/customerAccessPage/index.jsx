import React from 'react'
import { Footer } from '../footer'
import { NavBar } from '../Navbar'
import { InnerPageContainer, PageContainer } from '../pageContainer'

export const CustomerAccessPage = (props) => {
    return <PageContainer>
        <NavBar/>
        <InnerPageContainer>
            Boom
        </InnerPageContainer>
        <Footer/>
    </PageContainer>
}