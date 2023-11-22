import React from "react";
import Appartements from "../../appartements.json";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import DetailLogement from "../fiche-logement";


const GalleryContainer = styled.div`
margin-top:80px;
margin-bottom:80px;
margin-left:10%;
margin-right:10%;
padding:3%;
// background:linear-gradient(#FF6060,#FFFFFF00,#000000);
background-color:#f6f6f6;
back-ground-opacity:0.3;
border-radius:15px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap:16px;`

const AppartementCard = styled.div`

border-radius:15px;

position: relative;
overflow: hidden; /* Pour gérer le débordement de l'image */

img {
  border-radius:15px;
  width: 100%;
  height:100%;
  max-height: 350px;
  min-height: 200px;
  object-fit: cover;
}
`;
const AptTitle = styled.h4`
position: absolute;
color:white;
bottom: 0;
left: 0;
width: 40%;
// background: rgba(255, 255, 255, 0.8); /* Fond semi-transparent pour le texte */

padding: 8px; /* Ajustement du rembourrage */
box-sizing: border-box; /* Inclusion de la bordure et du remplissage dans la largeur */
`;



 



function Gallery() {
    return (
        <GalleryContainer>
        {Appartements.map((appartement) => (
          <Link to={`/fiche-logement/${appartement.id}`} key={appartement.id}>
            <AppartementCard>
            <AptTitle>{appartement.title}</AptTitle>
              <img src={appartement.cover} alt={appartement.title} />
            </AppartementCard>
          </Link>
         
        ))}
      </GalleryContainer>
     

  )
  
}

export default Gallery