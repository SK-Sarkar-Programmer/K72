import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Layout from "../Layout";
import Work from "../pages/Work/Work";
import Agency from "../pages/Agency/Agency";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <Agency />,
      },
    ],
  },
]);

export default router;
