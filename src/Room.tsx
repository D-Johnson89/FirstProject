import React from "react";
import { Link } from "react-router-dom";

interface RoomProps {
	item?: string;
	boss?: string;
	clickEvent?: any;
}

const Room = ({ item, boss, clickEvent }: RoomProps) => {
	return (
		<div>
			<div>Room</div>
			<div>What do you choose to do?</div>
			<button>FIGHT</button>
			<button onClick={clickEvent}>
				<Link to="/hall">RUN</Link>
			</button>
		</div>
	);
};

export default Room;
