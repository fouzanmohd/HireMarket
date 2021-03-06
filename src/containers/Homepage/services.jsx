import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ServiceCard } from "./../../components/serviceCard/index";
import { Button } from "./../../components/Button/index";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from './../../components/responsive/index';

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`;

const WarningText = styled.h3`
  color: red;
  font-weight: 500;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 13px;

  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }
`;

export const Services = (props) => {
  const [servicesOffered, setServices] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const fetchResponse = async () => {
    const response = await Axios.get("http://localhost:9000/services").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (response) {
      setServices(response.data);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);
  return (
    <ServicesContainer>
      <Title>Most used services</Title>
      <ServicesWrapper>
        {servicesOffered.length > 0 ? (
          servicesOffered.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))
        ) : (
          <WarningText>There are no Services offered right now!</WarningText>
        )}
          
      </ServicesWrapper>
      <BottomContainer>
        {servicesOffered.length > 0 && (
          <ViewMoreButton>View More</ViewMoreButton>
        )}
      </BottomContainer>
    </ServicesContainer>
  );
};
