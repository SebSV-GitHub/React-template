/* eslint-disable unicorn/filename-case */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import routes from "./pages/routes.js";

const router = createBrowserRouter(routes);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
