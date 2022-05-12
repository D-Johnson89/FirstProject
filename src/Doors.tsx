import React from "react";
import { Link } from "react-router-dom";

const Door = () => {
	return (
		<button onClick={() => console.log("Door Clicks")}>
			<Link to="/room">
				<img src="https://via.placeholder.com/150" alt="" />
			</Link>
		</button>
	);
};

export default Door;
