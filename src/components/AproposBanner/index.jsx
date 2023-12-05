import React from "react";
import AproposBannerImg from "../../assets/AProposBannerImg.png"
import styled from "styled-components";

const AProposBannerContent = styled.img`
display:block;
justify-content:space-around;
width:80%;
height: 223px;
text-align:center;
margin-left:10%;
margin-right:10%;
border-radius: 10px;
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${AproposBannerImg});
@media ( max-width:768px){
    height: 223px;
}
@media ( max-width:375px){
    height: 111px;
    width:100%;
    max-width:315px;
    margin-left:20px;
margin-right:20px;
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