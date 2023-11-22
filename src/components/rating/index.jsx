import React from "react";

const StarRating = ({ rating }) => {
  // Arrondir la note à la demi-étoile la plus proche
  const roundedRating = Math.round(rating * 2) / 2;

  // Créer un tableau d'étoiles pleines et vides en fonction de la note
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<span key={i}>&#9733;</span>); // étoile pleine
    } else {
      stars.push(<span key={i}>&#9734;</span>); // étoile vide
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;