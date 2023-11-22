import React from "react";

import styled from "styled-components";
import { useParams } from 'react-router-dom';
// import StarRating from '../rating';

const InfoLog = styled.div`
    display:flex;
    flex-direction:raw;
    padding-bottom:40px;
    padding-top:40px;`




const DescriptionDrop = styled.select`
padding-left:20px;
padding-right:20px;
border-radius:25px;
padding :10px;
width:30%;
margin:auto;`

const EquipmentDrop = styled.select`
padding-left:20px;
padding-right:20px;
padding :10px;
border-radius:15px;
width:30%;
margin:auto;
`


const OptionDescription = styled.option`

display:flex;`


const OptionEquipment = styled.option`

display:flex;`




function DescripCard({ appartements }){
    const { id } = useParams();
 
    const logement = appartements.find((appartement)=>appartement.id.toString() === id);
  
  
    return (
    <InfoLog>
    <DescriptionDrop>
    <OptionDescription >description </OptionDescription>
    <OptionDescription value="">{logement.description}</OptionDescription>
    </DescriptionDrop>
    <EquipmentDrop>
    <OptionEquipment>equipements</OptionEquipment>
    <OptionEquipment value="">{logement.equipments}</OptionEquipment>
      </EquipmentDrop>
      </InfoLog>
    );
}


export default DescripCard;