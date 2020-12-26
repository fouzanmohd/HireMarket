import React from "react";
import LogoImg from "../../images/logos/logo.png";
import styled from "styled-components";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2.5em")};
  height: ${({ size }) => (size ? size + "px" : "2.5em")};
  img {
    height: 100%;
    width: 100%;
  }
  margin-right: 6px;
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "25px")};
  color: ${({color})=> color? color: "#fff"};
  font-weight: 900;
`;

export const BrandLogo = (props) => {
  const { textSize, logoSize, color ,hideLogo } = props;
  return (
    <BrandLogoContainer>
      {!hideLogo && <LogoImage size={logoSize}>
        <img src={LogoImg} alt="hirepro" />
      </LogoImage>}
      <LogoTitle size={textSize} color={color}>HirePro</LogoTitle>
    </BrandLogoContainer>
  );
};
