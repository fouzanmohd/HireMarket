import React from "react";
import styled from "styled-components";
import { BrandLogo } from "./../brandLogo/index";
import { Button } from "./../Button/index";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;
const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const NavLinks = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  font-size: 14px;
  cursor: pointer;
  margin-right: 15px;
  margin-left: 15px;
`;

const Seperator = styled.div`
  height: 45%;
  width: 1px;
  background-color: #fff;
  margin-right: 15px;
`;
export const NavBar = (props) => {
  const { useTransparent } = props;
  return (
    <NavBarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <NavLinkContainer>
        <NavLinks>Specialist Area</NavLinks>
        <Seperator />
        <Button size={11}>Sign up</Button>
        <NavLinks>Sign in</NavLinks>
      </NavLinkContainer>
    </NavBarContainer>
  );
};
