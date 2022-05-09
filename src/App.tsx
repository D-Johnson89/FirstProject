import React, { useState } from "react";
import "./App.css";
import Player from "./Player";

function App() {
	const [player, setPlayer] = useState({
		name: "Dustin",
		inventory: [],
		img: "https://via.placeholder.com/150x250",
	});
	return (
		<div className="App">
			<Player
				name={player.name}
				inventory={player.inventory}
				img={player.img}
			/>
		</div>
	);
}

export default App;
