import React from "react";
import Door from "./Doors";
import { doors } from "./utility";

const Hall = (playerStats: {
	name?: string;
	inventory?: string[];
	img?: any;
}) => {
	return (
		/*Hall Image*/
		<div style={{ display: "flex", flexDirection: "column" }}>
			{doors.map((door: any, index: number) => (
				<Door clickEvent={door.clickEvent} />
			))}
		</div>
	);
};

export default Hall;
