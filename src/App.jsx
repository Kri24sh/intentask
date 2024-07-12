import React from 'react';
import BasketballPlayerCard from './Components/BasketballPlayerCard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketballBall, faHandHoldingUsd, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faBasketballBall, faHandHoldingUsd, faTrophy);

const App = () => {
  const players = [
    {
      name: "LeBron James",
      image: "https://picsum.photos/150",
      position: "Forward",
      stats: { pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 },
    },
    {
      name: "Stephen Curry",
      image: "https://picsum.photos/150",
      position: "Guard",
      stats: { pointsPerGame: 30.1, assistsPerGame: 6.7, reboundsPerGame: 5.2 },
    },
    {
      name: "Kevin Durant",
      image: "https://picsum.photos/150",
      position: "Forward",
      stats: { pointsPerGame: 27.0, assistsPerGame: 5.6, reboundsPerGame: 7.1 },
    },
  ];

  return (
    <div className="app">
      {players.map((player, index) => (
        <BasketballPlayerCard
          key={index}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
};

export default App;

