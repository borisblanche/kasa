// import React, { useState } from 'react';
// import styled from 'styled-components';


// const AccordionBox = styled.div`
// display:flex;
// flex-direction:column;
// align-items: center;
// align-content:center;
// gap:20px;
// justify-content:space-around;
// margin-left:10%;
// margin-right:10%;
// margin-top:30px;
// margin-bottom:30px;
// `
// const AccordionBtn = styled.button`
// display:flex;
// flex-direction:raw;
// justify-content:space-between;
// justify-items:space-between;
// margin-left:10%;
// margin-right:10%;
// border-radius:15px;
// width:80%;
// `


// const AccordionBtnContainer = styled.div`

// justify-content:space-around;
// width:100%;`

// const AccordionContent= styled.div`
// background-color:#F6F6F6;
// color:#FF6060;
// margin-left:10%;
// margin-right:10%;
// padding-top:20px;
// padding-bottom:20px;
// padding-left:20px;
// padding-right:20px;
// border-radius:15px;
// `

// const AccordionItem = ({ title, content }) => {
//   const [isContentVisible, setIsContentVisible] = useState(false);

//   const toggleContentVisibility = () => {
//     setIsContentVisible(!isContentVisible);
//   };

//   return (
//     <AccordionBtnContainer>
//           <AccordionBtn className='RedDrop' onClick={toggleContentVisibility}><AccordionTitle>{title}</AccordionTitle>
//              <AccordionIcon> <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
// <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
//               </svg>
//               </AccordionIcon>
//           </AccordionBtn>
//           {isContentVisible && <AccordionContent>{content}</AccordionContent>}
         
//     </AccordionBtnContainer>
//   );
// };

// const Accordion = () => {
//   const accordionData = [
//     { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
//     { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme.' },
//     { title: 'Service', content: ' Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N hésitez pas à nous contacter si vous avez la moindre question.' },
//     { title: 'Sécurité', content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
//   ];

//   return (
//     < AccordionBox>
//       {accordionData.map((item, index) => (
//         <AccordionItem key={index} title={item.title} content={item.content} />
//       ))}
//     </ AccordionBox>
//   );
// };

// export default Accordion;

import React, { useState } from 'react';
import styled from 'styled-components';


const AccordionTitle = styled.h3`
display:flex;
background-color:green;
flex-direction:flex-start;
// justify-content:space-around;`

const AccordionIcon = styled.div`
display:flex;
// flex-direction:column;
justify-content:end;`

const AccordionBtnContainer = styled.div`
  display: flex;
  flex-direction: raw;
  // align-items: center;
  gap: 20px;
  justify-content: space-around;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const AccordionBtn = styled.button`
  color: red;
  background-color:blue;
  display:flex;
  flex-direction: raw;
  width: 80%;
  justify-content:space-around;
`;

const Accordion = ({ title, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <AccordionBtnContainer>
      <AccordionBtn onClick={toggleContentVisibility}>
        <AccordionTitle>
          {title}
          </AccordionTitle>
       <AccordionIcon> <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
          <path
            d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
            fill="white"
          />
        </svg>
        </AccordionIcon>
      </AccordionBtn>
      {isContentVisible && <p>{content}</p>}
    </AccordionBtnContainer>
  );
};

export default Accordion;