import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
	return (
		<div>
			<div>Intro</div>
			<nav>
				<Link to="/game">Game</Link>
			</nav>
		</div>
	);
};

export default Intro;
