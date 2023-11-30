import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../IconBtn';

const AccordionTitle = styled.h3`
color:white;
display:flex;
flex-direction:column;
justify-items:space-around;
margin-top:auto;
margin-bottom:auto;

`

const AccordionIcon = styled.div`
display:flex;
flex-direction:column;
justify-items:space-around;
margin-top:auto;
margin-bottom:auto;
`

const AccordionBtnContainer = styled.div`
  display: block;
  flex-direction: column;
  allign-content: center;
  max-width:100%;
  gap: 20px;
  justify-content: space-around;
 margin-left:auto;
 margin-right:auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color:#f6f6f6;
  color:#FF6060;
`;

const AccordionBtn = styled.button`
  display:flex;
  flex-direction: row;
  background-color:#FF6060;
  min-width:200px;
  max-width:100%;
  margin-left:auto;
  margin-right:auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-height:45px;
  border-radius:5px;
  padding-left:10px;
  padding-right:10px;
  justify-content:space-between;
`;

const Accordion = ({ title, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  

  const handleClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <AccordionBtnContainer>
      <AccordionBtn  onClick={handleClick}>
        <AccordionTitle>
          {title}
          </AccordionTitle>
        <AccordionIcon >
        <Icon>
          </Icon>
        </AccordionIcon>
      </AccordionBtn>
      {isContentVisible && <p>{content}</p>}
    </AccordionBtnContainer>
  );
};

export default Accordion;