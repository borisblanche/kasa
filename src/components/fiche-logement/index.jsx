import React from 'react';
import { useParams } from 'react-router-dom';
// import Styled from 'styled-components';
import NavHeader from '../header';
import Footer from '../footer';
import styled from 'styled-components';

const InfoLog = styled.div`
color:blue;`

const InfoLogDrop = styled.select`
color:blue;
display:grid;
grid-templates-columns:1fr 1fr`

const Option = styled.option`
color:red;`


const OptionMenu = styled.option`
background-color : green;`

function DetailLogement({ appartements }) {
  const { id } = useParams();
 
  const logement = appartements.find((appartement)=>appartement.id.toString() === id);

  if (!logement) {
    // Gérer le cas où le logement n'est pas trouvé
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <NavHeader/>
      
      {/* <h2>page detail</h2> */}
     
     <img src={logement.cover} alt={logement.title}/>
      <h2>{logement.title}</h2>
      <h3>{logement.location}</h3>
      {/* Autres détails du logement */}
      <div>
        <p>{logement.tags}</p>
      </div>
      <InfoLog>
      <InfoLogDrop>
     
      <OptionMenu >description </OptionMenu>
      <Option  value="">{logement.description}</Option>
      </InfoLogDrop>
      <InfoLogDrop>
      <option >equipements</option>
      <option  value="">{logement.equipments}</option>
       
        </InfoLogDrop>
        </InfoLog>
      <Footer/>
    </div>
  );
}

export default DetailLogement;