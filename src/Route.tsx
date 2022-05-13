import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Intro from "./intro";
import Room from "./Room";

const GameRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Intro />} />
				<Route path="/game" element={<App />} />
				<Route path="/room" element={<Room />} />
				<Route path="/hall" element={<App />} />
			</Routes>
		</div>
	);
};

export default GameRoutes;
