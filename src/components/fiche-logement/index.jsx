import React from 'react';
import { useParams } from 'react-router-dom';
// import Styled from 'styled-components';
import NavHeader from '../header';
import Footer from '../footer';
import styled from 'styled-components';


import Carousel from '../caroussel';
import Error from '../../pages/Error';
import HotesCard from '../host';
import LocationCard from '../location-card';
import DescripCard from '../descriptionDrop';


const InfoLocation = styled.div`
display:flex ;
flex-direction:raw;

margin-left:10%;
margin-right:10%;
justify-content : space-between;

`


function DetailLogement({ appartements }) {
  const { id } = useParams();
 
  const logement = appartements.find((appartement)=>appartement.id.toString() === id);

  if (!logement) {
    // Gérer le cas où le logement n'est pas trouvé
    return <Error/>
  }

  return (
    <div>
      <NavHeader />
      <Carousel appartement={logement} />
    <InfoLocation>
<LocationCard appartements={appartements}/>
<HotesCard appartements={appartements}/>
      </InfoLocation>
      <DescripCard appartements={appartements}/>
      <Footer /> 
      
    </div>
  );
}

export default DetailLogement;