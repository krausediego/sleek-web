import { makeHttpRequest } from "@/application/factories";
import { AuthSignInUseCase } from "@/domain/useCases";

export const signInRequestFn = new AuthSignInUseCase(
  makeHttpRequest(),
  "/auth/sign-in"
);
