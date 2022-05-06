import React, { useState } from "react";

interface PlayerProps {
  name: string;
  inventory?: string[];
}

const Player = ({ name, inventory }: PlayerProps) => {
  /*const [player, setPlayer] = useState<{
    name: string;
    inventory: string[];
  }>({ name: "", inventory: [] });*/

  return (
    <div>
      <div>Player Name: {name}</div>
      <img src="https://via.placeholder.com/150" />
      <div>Inventory: {inventory}</div>
    </div>
  );
};

export default Player;
