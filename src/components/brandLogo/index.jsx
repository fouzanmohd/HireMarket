import React from "react";
import LogoImg from "../../images/logos/logo.png";
import styled from "styled-components";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
width: ${({ size })=> size ? size + "px" : "4em"};
height: ${({ size })=> size ? size + "px" : "4em"};
img{
    height:100%;
    width:100%;
}
`;

const LogoTitle = styled.h2`
margin: 0;
font-size: ${({ size }) => size ? size + "px" : "25px"} ;
color: #fff;
font-weight: 900
`;

export const BrandLogo = (props) => {
  const { size } = props;
  return (
    <BrandLogoContainer>
      <LogoImage size={size}>
        <img src={LogoImg} alt="hirepro" />
      </LogoImage>
      <LogoTitle size={size}>HirePro</LogoTitle>
    </BrandLogoContainer>
  );
};
