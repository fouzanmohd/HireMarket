import Axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { ServiceCard } from './../../components/serviceCard/index';

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WarningText = styled.h3`
color:red;
font-weight:500;
`;

export const Services = (props) => {
    

    const [servicesOffered, setServices] = useState([])
    const [isLoading, setLoading] = useState(false)
    const isServicesEmpty = !servicesOffered || (servicesOffered && servicesOffered.length===0)
    const fetchResponse = async()=>{
        setLoading(true)
        const response = await Axios.get("http://localhost:9000/services").catch((err)=>{
            console.log("Error: ", err)
        });

        if (response){

            setServices(response.data)
            console.log(servicesOffered)
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchResponse()
    },[])
    return <ServicesContainer>
    <Title>Most used services</Title>
    <ServicesWrapper>
      {servicesOffered.length>0?
        servicesOffered.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        )) : <WarningText>There are no Services offered right now!</WarningText>}
    </ServicesWrapper>
    </ServicesContainer>
};
