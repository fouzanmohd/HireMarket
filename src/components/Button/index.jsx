import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.button`
color:#fff;
background-color:#2a9d8f;
padding: 6px 1.3em;
font-size: ${({size})=>size? size + "px" : "15px"};
font-weight:600;
border:none;
outline:none;
border-radius:5px;
float:left;
cursor:pointer;
transition: all 0.2s ease-in-out;

&:hover{
    background-color:#2a9e77;
}
&:focus {
    outline:none;
}


`;
export const Button = (props)=> {
    const {size} = props
    return <ButtonWrapper size = {size}>{props.children}</ButtonWrapper>
}