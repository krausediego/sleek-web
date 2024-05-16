import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, ApplicationLayout } from "@/presentation/layouts";

import { DashboardPage } from "../pages/application";
import { AuthSignInPage } from "../pages/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <AuthSignInPage />,
      },
    ],
  },
]);
