import React from "react";
import Door from "./Doors";

/*interface DoorProps {
	img?: any;
}*/

const Hall = (/*{ img }: DoorProps*/) => {
	return (
		/*Hall Image*/
		<div>
			{[0, 1, 2].map((door, index) => (
				<Door />
			))}
		</div>
	);
};

export default Hall;
