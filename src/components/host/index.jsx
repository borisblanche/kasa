import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import StarRating from '../rating';
// import Error from '../../pages/Error';
// import appartements from "../../appartements.json";


const HoteCard = styled.div`
display: flex;
flex-direction : column;
justify-content:space-between;
`

const Presentation = styled.div`
display: flex;
justify-content:flex-end;

`

const HosteImg = styled.img`
border-radius:50%;
margin-top: 10%;
margin-right: 10%;
width:60px;
height:60px;`

const StarCard = styled.div`
display: flex;
justify-content:space-around;
`

function HotesCard({ appartements }) {
    const { id } = useParams();

    if (!appartements || appartements.length === 0) {
        return <div>Liste d'appartements non disponible</div>;
      }
 
    const logement = appartements.find((appartement) => appartement.id.toString() === id);
    if (!logement) {
        // Gérer le cas où le logement n'est pas trouvé
        return <div> fiche non trouvée</div>
    }
    const hostName = logement.host ? logement.host.name : "Nom non disponible";
  const hostPicture = logement.host ? logement.host.picture : ""; // ou une image par défaut
    return (
        <HoteCard>
            <Presentation>
                <h4>{hostName}</h4>
      
                <HosteImg src={hostPicture} alt="" />
            </Presentation>
        <StarCard>
                <StarRating rating={logement.rating} />
                </StarCard>
        </HoteCard>
    );
}


export default HotesCard;