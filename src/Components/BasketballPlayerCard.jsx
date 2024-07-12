import React from 'react';
import '../Css/BasketballPlayerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall, faHandHoldingUsd, faTrophy } from '@fortawesome/free-solid-svg-icons';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <div className="player-image-container">
        <img src={image} alt={`${name}`} className="player-image" />
      </div>
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p><FontAwesomeIcon icon={faBasketballBall} /> Points per Game: {stats.pointsPerGame}</p>
        <p><FontAwesomeIcon icon={faHandHoldingUsd} /> Assists per Game: {stats.assistsPerGame}</p>
        <p><FontAwesomeIcon icon={faTrophy} /> Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
