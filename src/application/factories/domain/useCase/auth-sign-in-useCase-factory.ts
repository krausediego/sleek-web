import { makeHttpRequest } from "@/application/factories/infra";
import { IAuthSignIn } from "@/domain/interfaces";
import { AuthSignInUseCase } from "@/domain/useCases";

export const makeAuthSignInUseCase = (authSignInUrl: string): IAuthSignIn => {
  return new AuthSignInUseCase(makeHttpRequest(), authSignInUrl);
};
