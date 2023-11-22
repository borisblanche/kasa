import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TagList from '../tags';

const LocCard = styled.div`
// background-color:blue;
display:flex;
flex-direction: column;
justify-content :start;
width: 100%;
color:#FF6060;
`

const LocTitle = styled.h2`
display:flex;
justify-content :start;
`

const LocLocation = styled.h3`
display:flex;
justify-content :start;
`
const TagLocation = styled.div`

`


function LocationCard({ appartements }) {
    const { id } = useParams();
   
    const logement = appartements.find((appartement)=>appartement.id.toString() === id);
  
    if (!logement) {
      // Gérer le cas où le logement n'est pas trouvé
      return <div>la localilasition n est pas presente</div>
    }
  
    return (
      <LocCard>
       
       
        <LocTitle>{logement.title}</LocTitle>
        <LocLocation>{logement.location}</LocLocation>
        <TagLocation>
            <TagList tags={logement.tags} />
            </TagLocation>
        
  
  
       
        
      </LocCard>
    );
  }
  
  export default LocationCard;