import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
display:flex;
justify-content:start;
text-align:center;
vertical-allign:middle;
// flex-direction: raw;
gap:20px;
@media ( max-width : 400px ){
  gap:10px;
}
`

const TagElement = styled.div`
display:flex;
flex-direction:raw;
color:white;
background-color:#FF6060;
background:linear-gradient(#FFFFFF,0%#FFFFFF00);
border-radius:10px;
padding-bottom:5px;
padding-top:5px;
padding-left:30px;
padding-right:30px;
gap:27px;
text-align:center;
@media ( max-width : 400px ){
  max-height:18px;
  vertical-allign:center;
  display:block;
  padding-left:20px;
padding-right:20px;
padding-top:0px;
padding-bottom:4px;
font-size:10px;
font-style: normal;
font-weight: 500;

}`

const TagList = ({ tags }) => {
    return (
      <TagContainer>
        {tags.map((tag, index) => (
          <TagElement key={index}>{tag}</TagElement>
        ))}
      </TagContainer>
    );
  };
  
  export default TagList;