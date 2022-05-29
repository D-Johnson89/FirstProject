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
		<div
			style={{
				border: "3px solid green",
				display: "flex",
				height: "160px",
			}}
		>
			{doors.map((door: any, index: number) => (
				<Door clickEvent={door.clickEvent} />
			))}
		</div>
	);
};

export default Hall;
