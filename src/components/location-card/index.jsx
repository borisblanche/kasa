import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TagList from '../tags';

const LocCard = styled.div`
 display:flex;
flex-direction: column;
justify-content :start;
width: 50%;
 color: #FF6060;
@media (max-width:375px){
  width:100%;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 142.6%;
 margin-top:-20px;
 padding-top:-20px;
}
color:#FF6060;
`

const LocTitle = styled.h2`
display:flex;
justify-content :start;
margin-bottom:0px;
color: #FF6060;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: 142.6%;
@media (max-width:375px){
  color: #FF6060;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;  
}
`

const LocLocation = styled.h3`
display:flex;
margin-top:5px;
justify-content :start;
@media (max-width:375px){
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; }
`
const TagLocation = styled.div`
 
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