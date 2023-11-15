import React from "react";
import Appartements from "../../appartements.json";
import styled from "styled-components";


const GalleryContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap:16 px;`

const AppartementCard = styled.div`
border: 1px solid #ccc;
padding: 16px;
text-align: center;

img {
  max-width: 100%;
  height: auto;
}`




function Gallery() {
    
    return (
        <GalleryContainer>
            {
                Appartements.map((appartement)=>(
            <AppartementCard key={appartement.id}>
                <h3>{appartement.title}</h3>
                <img src={appartement.cover}alt={appartement.title}/>
            </AppartementCard>
                ))
}
  </GalleryContainer>
    )
}

export default Gallery