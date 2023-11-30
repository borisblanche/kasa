import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TagList from '../tags';

const LocCard = styled.div`
 
color:#FF6060;
`

const LocTitle = styled.h2`
display:flex;
justify-content :start;
// background-color:cyan;
margin-bottom:0px
`

const LocLocation = styled.h3`
display:flex;
margin-top:5px;
justify-content :start;

`
const TagLocation = styled.div`
// background-color:green;
`


function LocationCard({ appartements }) {
    const { id } = useParams();
   
    const logement = appartements.find((appartement)=>appartement.id.toString() === id);
  
    if (!logement) {
      
      return <div>la localisation n est pas presente</div>
    }
  
    return (
      <LocCard className='LocCard'>
        <LocTitle>{logement.title}</LocTitle>
        <LocLocation>{logement.location}</LocLocation>
        <TagLocation className='TagLocation'>
            <TagList tags={logement.tags} />
            </TagLocation>
      </LocCard>
    );
  }
  
  export default LocationCard;