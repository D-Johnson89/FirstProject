import React, { useState } from "react";
import Inventory from "./Inventory";

interface PlayerProps {
	name: string;
	inventory?: string[];
	img?: any;
}

const Player = ({ name, img, inventory }: PlayerProps) => {
	return (
		<div>
			<div>Player Name: {name}</div>
			<img src={img} alt="" />

			<Inventory items={inventory} />
		</div>
	);
};

export default Player;
