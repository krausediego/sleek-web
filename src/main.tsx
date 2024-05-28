import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@/app";
import "@/presentation/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./presentation/lib";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
