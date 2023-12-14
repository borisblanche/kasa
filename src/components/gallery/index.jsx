import React from "react";
import Appartements from "../../appartements.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GalleryContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-gap:50px;
margin-top:80px;
margin-bottom:80px;
margin-left:10%;
margin-right:10%;
padding:50px;
background-color:#f6f6f6;
back-ground-opacity:0.3;
border-radius:15px;

@media( max-width : 1024px){
  grid-template-columns:1fr 1fr;
}
@media( max-width : 768px){
  grid-template-columns:1fr;
  padding:0;
  margin:10%;
}
@media ( max-width : 375px ){
  margin-left:20px;
margin-right:20px;
grid-gap:20px;
}
`

const AppartementCard = styled.div`
border-radius:15px;
position: relative;
overflow: hidden; 
@media (max-width:400px){
  max-height: 225px;
    }
img {
  border-radius:15px;
  width: 100%;
  height:100%;
  max-height: 340px;
  min-height: 340px;
  object-fit: cover;
}
`;
const AptTitle = styled.h4`
position: absolute;
display:flex;
color:white;
bottom: 0;
left: 0;
width: 100%;
padding: 8px; 
box-sizing: border-box; 
 `;


function Gallery() {
    return (
        <GalleryContainer className='gallery'>
        {Appartements.map((appartement) => (
          <Link to={`/fiche-logement/${appartement.id}`} key={appartement.id}>
            <AppartementCard className="gallery-card" >
            <AptTitle>{appartement.title}</AptTitle>
              <img className="gallery-img" src={appartement.cover} alt={appartement.title} />
                         </AppartementCard>
          </Link>
         
        ))}
      </GalleryContainer>
     

  )
  
}

export default Gallery