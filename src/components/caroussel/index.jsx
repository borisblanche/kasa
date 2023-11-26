import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  width: 80%;
  height:400px;
  margin: auto;
 
`;

const CarrouselImg = styled.img`
width:100%;
max-height:400px;
min-height:400px;
object-fit: cover;`

const ArrowButton = styled.button`
top:300px;
 
  background-color: transparent;
  border: none;
  font-size: 80px;
  vertical-align: middle;
  color: white;
  cursor: pointer;
`;

const PrevButton = styled(ArrowButton)`
color:white;
left: 10%;
  position:absolute;
`;

const NextButton = styled(ArrowButton)`
position:absolute;
 right:10%;
  color:white;
`;

function Carousel({ appartement }) {

  const slideRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <CarouselContainer>
      <Slider ref={slideRef} {...sliderSettings}> 
        {appartement.pictures.map((picture, index) => (
          <CarrouselImg key={index} src={picture} alt={`Appartements ${index + 1}`} />
        ))}
     
       </Slider>
       <PrevButton onClick={() => slideRef.current.slickPrev(-1)}>{'<'}</PrevButton>
      <NextButton onClick={() => slideRef.current.slickNext(+1)}>{'>'}</NextButton>
    </CarouselContainer>
  );
}


export default Carousel