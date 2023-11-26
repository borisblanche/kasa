import React from "react";
import AproposBannerImg from "../../assets/AProposBannerImg.png"
import styled from "styled-components";

const AProposBannerContent = styled.img`
display:flex;
justify-content:space-around;
width:80%;
margin:auto;
border-radius:15px

`


function AProposBanner() {

    
    return (
        <div>
            <AProposBannerContent src={AproposBannerImg} alt= "image de paysage" />
            </div>
    )
   
    
}

export default AProposBanner;