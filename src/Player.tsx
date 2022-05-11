import React, { useState } from "react";
import "./player.css";
import Inventory from "./Inventory";

interface PlayerProps {
	name: string;
	inventory?: string[];
	img?: any;
}

const Player = ({ name, img, inventory }: PlayerProps) => {
	return (
		<div className="player">
			<div className="character">
				<div>Player Name: {name}</div>
				<img src={img} alt="" />
			</div>
			<div className="inventory">
				<Inventory items={inventory} />
			</div>
		</div>
	);
};

export default Player;
