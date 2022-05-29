import React from "react";
import { Link } from "react-router-dom";

const Door = ({ clickEvent }: any) => {
	return (
		<button
			onClick={clickEvent}
			style={{
				border: "3px solid yellow",
			}}
		>
			<Link to="/room">
				<img
					src="https://via.placeholder.com/150/000000/FFFFFF?text=Door"
					alt=""
				/>
			</Link>
		</button>
	);
};

export default Door;
