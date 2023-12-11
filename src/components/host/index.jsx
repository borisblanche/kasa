import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import StarRating from '../rating';



const HoteCard = styled.div`
display: flex;
flex-direction : column;
justify-content:space-around;
align-items:stretch;
color:#FF6060;
@media (max-width:765px){
    display:flex;
    flex-direction: row-reverse;
    justify-content:space-between;
}
`

const Presentation = styled.div`
display: flex;
flex-direction:row;
justify-content:flex-end;
flex-wrap: wrap;
vertical-align:center;
@media (max-width:765px){
    display:flex;
    flex-direction:row;
    justify-content:center;
}
`

const HosteImg = styled.img`
display:flex;
border-radius:50%;
margin:auto;
margin-right: 0;
margin-left: 0;
width:64px;
height:64px;
@media (max-width:375px){
    width:32px;
    height:32px; 
}`

const StarCard = styled.div`
display: flex;
justify-content:space-around;
@media (max-width:765px){
    display:flex;
    flex-direction:column;}
`
const HostNameContent = styled.h4`
display:block;
width:60px;
margin-right:15px;
color: #FF6060;
text-align: right;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
@media (max-width:375px){
    font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 142.6%;
}
`

function HotesCard({ appartements }) {
    const { id } = useParams();

    if (!appartements || appartements.length === 0) {
        return <div>Liste d'appartements non disponible</div>;
      }
 
    const logement = appartements.find((appartement) => appartement.id.toString() === id);
    if (!logement) {
        
        return <div> fiche non trouvée</div>
    }
    const hostName = logement.host ? logement.host.name : "Nom non disponible";
  const hostPicture = logement.host ? logement.host.picture : ""; // ou une image par défaut
    return (
        <HoteCard className="HoteCard">
            <Presentation className="HotePresentation">
                <HostNameContent>{hostName}</HostNameContent>
                <HosteImg src={hostPicture} alt="" />
            </Presentation>
        <StarCard className="StarCard">
                <StarRating rating={logement.rating} />
                </StarCard>
        </HoteCard>
    );
}


export default HotesCard;