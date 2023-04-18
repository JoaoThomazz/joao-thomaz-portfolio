import { createBrowserRouter } from "react-router-dom";

import Error from "../pages/error/Error";
import Home from "../pages/home/Home";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default Routing;
