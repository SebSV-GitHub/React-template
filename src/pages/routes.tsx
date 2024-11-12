import type { RouteObject } from "react-router-dom";
import Root from "./index.js";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
	},
];

export default routes;
