import { createBrowserRouter } from "react-router-dom";

import { AuthSignInPageFactory } from "@/application/factories";
import { AuthLayout } from "@/presentation/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <AuthSignInPageFactory />,
      },
    ],
  },
]);
