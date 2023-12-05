import React from "react";
import BlackLogo from '../../assets/black-logo.png'
import styled from "styled-components"

const FooterContainer = styled.div`
background-color:black;
color:white;
text-align:center;
margin:0;
padding-top: 66px;
padding-bottom: 58px;
margin-top:17px;
`
const FooterText = styled.h3`
color: #FFF;

text-align: center;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 142.6%; /* 34.224px */
@media (max-width:768px){
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%; /* 17.112px */  
}
`
const BreakFooter = styled.br`
display : none ;
@media (max-width:768px){
    display:block;
}`

function Footer() {
    return (
        <FooterContainer>
            <img src={BlackLogo} alt="Logo kasa noir" />
            <FooterText>©2020 Kasa. All <BreakFooter></BreakFooter> rights reserved</FooterText>
            </FooterContainer>
    )
}

export default Footer