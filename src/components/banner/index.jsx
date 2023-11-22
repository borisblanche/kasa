import React from "react";
import banner from '../../assets/banner.png'
import styled from "styled-components";




const BannerImg = styled.div`
background-image:url(${banner});
display:flex;
border-radius:25px;

margin-left:10%;
margin-right:10%;
height:150px;
mix-blend-mode: darken;
object-fit:cover;
justify-content: space-around;
align-items:center;
color:white;
`

function Banner() {
    return (
        
        <BannerImg>
            <h2>Chez vous, partout et ailleurs</h2>
            </BannerImg>
            
    )
}

export default Banner