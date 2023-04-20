import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/home/Home";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default Routing;
