import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  width: 80%;
  height:415px;
  margin: auto;
  @media (max-width:768px){
    height:255px;
  };
`;

const CarrouselImg = styled.img`
width:100%;
max-height:400px;
// min-height:400px;
object-fit: cover;
@media ( max-width : 768px ){
 max-height:255px;
}`

const ArrowButton = styled.button`
top:300px;
//  position:absolute;
  background-color: transparent;
  border: none;
  vertical-align: middle;
  color: white;
  cursor: pointer;
  @media (max-width:768px){
    top:265px;
  };
 
 
`;

const PrevButton = styled(ArrowButton)`
color:white;
left: 10%;
margin-left:10px;
  position:absolute;
  @media (max-width:768px){

    svg{
      height:24px;
      width:24px;
    }}
`;

const NextButton = styled(ArrowButton)`
position:absolute;
 right:10%;
 margin-right:10px;
  color:white;
  @media (max-width:768px){

    svg{
      height:24px;
      width:24px;
    }}
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
       <PrevButton onClick={() => slideRef.current.slickPrev(-1)}><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Vector">
<path id="Vector_2" d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
</g>
</svg></PrevButton>
      <NextButton onClick={() => slideRef.current.slickNext(+1)}><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Vector">
<path id="Vector_2" d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
</g>
</svg></NextButton>
    </CarouselContainer>
  );
}


export default Carousel