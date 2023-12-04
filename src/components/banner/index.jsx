import React from "react";
import banner from '../../assets/banner.png'
import styled from "styled-components";




const BannerImg = styled.div`

// background-color:black;
// opacity:0.3;
// background-image:url(${banner});
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${banner});
background-position:center;
background-size:cover;
display:flex;
border-radius:10px;
margin-left:10%;
margin-right:10%;
height:223px;
justify-content: space-around;
align-items:center;
color:FFFFFF;

@media ( max-width : 768px ){
    max-height:111px;
    display:flex;
    justify-content: flex-start;
align-items:center;
}

`
const BannerTitle = styled.h2`
color: #FFF;

font-family: Montserrat;
font-size: 48px;
font-style: normal;
font-weight: 500;
line-height: 142.6%; 
@media ( max-width : 768px ){
    

font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 100%; 
text-align:left;
padding-left:16px;
}
`
const MobileBreak = styled.br`
display:none;
@media ( max-width : 768px ){
    display:block;
}`

function Banner() {
    return (
        
        <BannerImg>
            <BannerTitle>Chez vous,<MobileBreak></MobileBreak> partout et ailleurs</BannerTitle>
            </BannerImg>
            
    )
}

export default Banner