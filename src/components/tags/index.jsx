import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
display:flex;
flex-direction: raw;
gap:20px;`

const TagElement = styled.div`
display:flex;
color:white;
background-color:#FF6060;
background:linear-gradient(#FFFFFF,0%#FFFFFF00);
border-radius:15px;
padding-left:15px;
padding-right:15px;
gap:20px`

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