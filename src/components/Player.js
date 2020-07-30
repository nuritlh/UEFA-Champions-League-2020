import React from 'react';

const Player = ({ player }) => (
  <>
    <div>{player.name}</div>
    <div>{player.shirtNumber}</div>
  </>
);

export default Player;