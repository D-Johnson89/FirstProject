import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GameRoutes from "./Route";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GameRoutes />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
