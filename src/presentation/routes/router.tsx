import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, ApplicationLayout } from "@/presentation/layouts";

import { useValidateRole } from "../hooks";
import {
  CollaboratorsPage,
  DashboardPage,
  InvitesPage,
} from "../pages/application";
import { AuthSignInPage } from "../pages/auth";

export const Router = () => {
  const { validateUserRolePage } = useValidateRole();

  return createBrowserRouter([
    {
      path: "/",
      element: <ApplicationLayout />,
      children: [
        {
          path: "/",
          element: <DashboardPage />,
        },
        {
          path: "/invites",
          element: validateUserRolePage(<InvitesPage />),
        },
        {
          path: "/collaborators",
          element: validateUserRolePage(<CollaboratorsPage />),
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
};
