import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Filter } from "./pages/Filter/Filter";
import { FAQ } from "./pages/FAQ/FAQ";
import { About } from "./pages/About/About";
import { MainHeader } from "./components/custom/MainHeader";
import { MainBody } from "./pages/Landing/MainBody";
import { SecondaryHeader } from "./components/custom/SecondaryHeader";
import { PageNotFound } from "./pages/PageNotFound";
import { PlayerCard } from "./pages/Dashboard/PlayerCard";

export const router = createBrowserRouter([
  {
    element: <MainHeader />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <MainBody /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    element: <SecondaryHeader />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "/dashboard/MS",
        children: [
          {
            index: true,
            element: (
              <Dashboard
                categoryDescription={"Men Single"}
                categoryColor={"text-blue-500"}
                categoryType={"Single"}
              />
            ),
            loader: () => {
              return fetch("https://www.bwfshuttleapi.com/rankings/api/MS");
            },
          },
          {
            path: ":memberId",
            element: <PlayerCard />,
          },
        ],
      },
      {
        path: "/dashboard/WS",
        children: [
          {
            index: true,
            element: (
              <Dashboard
                categoryDescription={"Women Single"}
                categoryColor={"text-red-500"}
                categoryType={"Single"}
              />
            ),
            loader: () => {
              return fetch("https://www.bwfshuttleapi.com/rankings/api/WS");
            },
          },
          {
            path: ":memberId",
            element: <PlayerCard />,
          },
        ],
      },
      {
        path: "/dashboard/MD",
        children: [
          {
            index: true,
            element: (
              <Dashboard
                categoryDescription={"Men Double"}
                categoryColor={"text-blue-500"}
                categoryType={"Double"}
              />
            ),
            loader: () => {
              return fetch("https://www.bwfshuttleapi.com/rankings/api/MD");
            },
          },
          {
            path: ":memberId",
            element: <PlayerCard />,
          },
        ],
      },
      {
        path: "/dashboard/WD",
        children: [
          {
            index: true,
            element: (
              <Dashboard
                categoryDescription={"Women Double"}
                categoryColor={"text-red-500"}
                categoryType={"Double"}
              />
            ),
            loader: () => {
              return fetch("https://www.bwfshuttleapi.com/rankings/api/WD");
            },
          },
          {
            path: ":memberId",
            element: <PlayerCard />,
          },
        ],
      },
      {
        path: "/dashboard/XD",
        children: [
          {
            index: true,
            element: (
              <Dashboard
                categoryDescription={"Mixed Double"}
                categoryColor={"text-purple-500"}
                categoryType={"Double"}
              />
            ),
            loader: () => {
              return fetch("https://www.bwfshuttleapi.com/rankings/api/XD");
            },
          },
          {
            path: ":memberId",
            element: <PlayerCard />,
          },
        ],
      },
    ],
  },
]);
