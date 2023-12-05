import React from 'react';
import { useParams } from 'react-router-dom';
import NavHeader from '../../components/header';
import Footer from '../../components/footer';
import styled from 'styled-components';
import Carousel from '../../components/caroussel';
import Error from '../Error';
import HotesCard from '../../components/host';
import LocationCard from '../../components/location-card';
import DescripCard from '../../components/descriptionDrop';


const InfoLocation = styled.div`
display:flex ;
flex-direction:raw;
margin-left:10%;
margin-right:10%;
justify-content : space-between;
@media(max-width:375px ){
  display:flex;
  flex-direction:column;
margin-left:20px;
margin-right:20px;}
}
`


function DetailLogement({ appartements }) {
  const { id } = useParams();
 
  const logement = appartements.find((appartement)=>appartement.id.toString() === id);

  if (!logement) {
    
    return <Error/>
  }

  return (
    <div>
      <NavHeader />
      <Carousel appartement={logement} />
    <InfoLocation className='InfoLocation'>
<LocationCard appartements={appartements}/>
<HotesCard appartements={appartements}/>
      </InfoLocation>
      <DescripCard appartements={appartements}/>
      <Footer /> 
      
    </div>
  );
}

export default DetailLogement;