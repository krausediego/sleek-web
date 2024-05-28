import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { isAxiosError } from "axios";

import { makeHttpRequest } from "@/application/factories";
import { useQueryClient } from "@tanstack/react-query";

import { Header } from "../components";

export function ApplicationLayout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const api = makeHttpRequest().getInstance();

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;

          if (status === 401) {
            queryClient.clear();
            navigate("/sign-in", { replace: true });
          } else {
            throw error;
          }
        }
      }
    );

    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [api.interceptors.response, navigate, queryClient]);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
