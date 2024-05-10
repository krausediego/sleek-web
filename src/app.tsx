import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/presentation/components";
import { Toaster } from "@/presentation/components/ui/sonner";
import { queryClient } from "@/presentation/lib";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { router } from "./presentation/routes";

export function App() {
  return (
    <ThemeProvider>
      <Toaster richColors />

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />

        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
