/* eslint-disable unicorn/filename-case */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./pages/routes.js";

const router = createBrowserRouter(routes);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
