import React from "react";
import styled from "styled-components";

const StarRating = ({ rating }) => {

  const roundedRating = Math.round(rating * 2) / 2;

  const StarOn = styled.span`
  font-size:24px;
  gap:25px;
  padding-left:10px;
  xolor:#FF6060;
  @media (max-width:375px){
    font-size:18px;
  }
`
  const StarOff = styled.span`
  font-size:24px;
  gap:25px;
  padding-left:10px;
  color:#E3E3E3;
  @media (max-width:375px){
    font-size:18px;
  }
`
  
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<StarOn key={i}>&#9733;</StarOn>); // étoile pleine
    } else {
      stars.push(<StarOff key={i}>&#9733;</StarOff>); // étoile vide
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;