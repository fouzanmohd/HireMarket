import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  width: 300px;
  min-height: 250px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  margin: 0.5em;
  margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-top: 1px solid rgba(15, 15, 15, 0.2);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  text-align: start;
`;

const SpecialistName = styled.h3`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 14px;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  color: #ebe204;
`;

const StartingAtText = styled.h6`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  color: rgba(161, 161, 161, 0.9);
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  margin-left: 3px;
  color: #2ba679;
  font-weight: 500;
`;
export const ServiceCard = (props) => {
  const { thumbnailUrl, specialist, rating, title, id, rate } = props;
  return (
    <CardContainer>
      <TopContainer>
        <ServiceThumbnail>
          <img src={thumbnailUrl} alt="" />
        </ServiceThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <SpecialistName>{specialist.fullName}</SpecialistName>
      </ContentContainer>
      <BottomContainer>
        <RatingContainer>
          <FontAwesomeIcon icon={faStar} size="sm" />
          {rating}
        </RatingContainer>
        <PriceContainer>
          <StartingAtText>Starting At</StartingAtText>
          <PriceText>{rate}/hr</PriceText>
        </PriceContainer>
      </BottomContainer>
    </CardContainer>
  );
};
