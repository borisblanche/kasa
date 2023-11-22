import React from "react";
import BlackLogo from '../../assets/black-logo.png'
import styled from "styled-components"

const FooterContainer = styled.div`
background-color:black;
color:white;
text-align:center;
margin-bottom:0px;
padding-top: 30px;
padding-bottom: 20px;


`


function Footer() {
    return (
        <FooterContainer>
            <img src={BlackLogo} alt="Logo kasa noir" />
            <h3>©2020 Kasa. All rights reserved</h3>
            </FooterContainer>
    )
}

export default Footer