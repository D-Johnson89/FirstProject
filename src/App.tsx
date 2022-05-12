import React, { useState } from "react";
import "./App.css";
import Player from "./Player";
import Hall from "./Hall";

function App() {
	const [player, setPlayer] = useState({
		name: "Dustin",
		inventory: ["sword", "shield", "tunic", "shoes", "potion"],
		img: "https://via.placeholder.com/175x250",
	});
	return (
		<div className="App">
			<Player
				name={player.name}
				inventory={player.inventory}
				img={player.img}
			/>
			<Hall />
		</div>
	);
}

export default App;
