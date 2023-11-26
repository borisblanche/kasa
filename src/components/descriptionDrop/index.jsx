
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
  // background-color:blue;
  justify-items:space-between;
  gap:5%;

  
`;

const DescripBox = styled.div`
width:50%;
`

const EquipBox = styled.div`
width:50%;
`

const DescripCard = ({ appartements }) => {
  const { id } = useParams();

  const logement = appartements.find((appartement) => appartement.id.toString() === id);

  return (
    <DescripAccordionBox>
      <DescripBox>
        <Accordion title="Description" content={logement.description}  />
      </DescripBox>
      <EquipBox>
        <Accordion title="Equipements" content={logement.equipments} />
        </EquipBox>
    </DescripAccordionBox>
  );
};

export default DescripCard;


