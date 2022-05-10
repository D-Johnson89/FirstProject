import React, { useState } from "react";
import "./App.scss";
import Player from "./Player";

function App() {
  const [player, setPlayer] = useState({
    name: "Randi",
    inventory: ["Sword", "Shield", "Potion"],
    img: "https://via.placeholder.com/150",
  });

  return (
    <div className="App">
      <div className="container">
        <Player
          name={player.name}
          inventory={player.inventory}
          img={player.img}
        />
      </div>
    </div>
  );
}

export default App;
