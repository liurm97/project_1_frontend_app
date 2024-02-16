import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Filter } from "./pages/Filter/Filter";
import { BuyCoffee } from "./pages/BuyCoffee/BuyCoffee";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";
import { MainHeader } from "./components/custom/MainHeader";
import { MainBody } from "./pages/Landing/MainBody";
import { SecondaryHeader } from "./components/custom/SecondaryHeader";
import { PageNotFound } from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    element: <MainHeader />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <MainBody /> },
      { path: "/coffee", element: <BuyCoffee /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    element: <SecondaryHeader />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
    ],
  },
]);
