import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import Agency from "../pages/Agency/Agency";
import Work from "../pages/Work/Work";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <Agency /> },
      { path: "/work", element: <Work /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
