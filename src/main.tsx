import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Lets CSS hide reveal targets before the first paint, so nothing flashes in.
document.documentElement.classList.add("has-js");

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element #root was not found in index.html");
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
