import { RouterProvider } from "react-router-dom";

import { Toaster } from "sonner";

import { ThemeProvider } from "@/presentation/components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Router } from "./presentation/routes";

export function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-center" richColors />

      <ReactQueryDevtools initialIsOpen />

      <RouterProvider router={Router()} />
    </ThemeProvider>
  );
}
