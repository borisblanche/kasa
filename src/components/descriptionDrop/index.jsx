
import React from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../accordion';
import styled from 'styled-components';

const DescripAccordionBox = styled.div`
  display:flex;
  grid-templates-columns:1fr 1fr ;
  flex-direction:raw;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-items:space-between;
  gap:5%;

  
`;

const DescripBox = styled.div`

`

const EquipBox = styled.div`
// width:50%;
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


