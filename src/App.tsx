import React from "react";
import "./App.css";
import Player from "./Player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Text Adventure
        <Player name={"Randi"} />
      </header>
    </div>
  );
}

export default App;
