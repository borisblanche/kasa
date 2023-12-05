
import React from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../accordion';
import styled from 'styled-components';

const DescripAccordionBox = styled.div`
  display:flex;
  grid-templates-columns:1fr 1fr ;
  flex-direction:raw;
 
  margin-left: 10%;
  margin-right: 10%;
  justify-items:space-between;
  gap:5%;
  @media (max-width:375px){
    margin-left:20px;
    margin-right: 20px;
    flex-direction:column;
    justify-contents:space-around;
   
    

  }

  
`;

const DescripBox = styled.div`
width:50%;
@media (max-width:768px){
  width:100%;
`

const EquipBox = styled.div`
 width:50%;
 @media (max-width:768px){
  width:100%;
`

const DescripCard = ({ appartements }) => {
  const { id } = useParams();

  const logement = appartements.find((appartement) => appartement.id.toString() === id);

  return (
    <DescripAccordionBox className='DescripAccordionBox'>
      <DescripBox className='DescripBox'>
        <Accordion  title="Description"  content={logement.description}  />
      </DescripBox>
      <EquipBox className='EquipBox'>
        <Accordion title="Equipements" content={logement.equipments} />
        </EquipBox>
    </DescripAccordionBox>
  );
};

export default DescripCard;


