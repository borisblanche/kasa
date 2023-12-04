import React from "react";
import AproposBannerImg from "../../assets/AProposBannerImg.png"
import styled from "styled-components";

const AProposBannerContent = styled.img`
display:flex;
justify-content:space-around;
height: 223px;
width:80%;
margin:auto;
border-radius: 10px;
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${AproposBannerImg});
@media ( max-width:768px){
    height: 223px;
}
@media ( max-width:375px){
    height: 111px;
}
`


function AProposBanner() {

    
    return (
        <div>
            <AProposBannerContent src={AproposBannerImg} alt= "image de paysage" />
            </div>
    )
   
    
}

export default AProposBanner;