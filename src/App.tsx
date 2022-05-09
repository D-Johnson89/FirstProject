import React, { useState } from "react";
import "./App.css";
import Player from "./Player";

function App() {
  const [player, setPlayer] = useState({
    name: "Randi",
    inventory: ["Sword", "Shield", "Potion"],
    img: "https://via.placeholder.com/150",
  });
  return (
    <div className="App">
      <header className="App-header">
        <Player
          name={player.name}
          inventory={player.inventory}
          img={player.img}
        />
      </header>
    </div>
  );
}

export default App;
