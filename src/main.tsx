import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App.tsx";
import { initAlgoDB } from "./Algorithms/algoUtils.ts";

initAlgoDB();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
