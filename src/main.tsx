import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./app.js";

createRoot(document.querySelector("#root")!).render(
	<StrictMode>
		<CssBaseline />
		<App />
	</StrictMode>
);
