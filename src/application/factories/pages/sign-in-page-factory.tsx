import { makeHttpRequest } from "@/application/factories";
import { AuthSignInUseCase } from "@/domain/useCases";
import { AuthSignInPage } from "@/presentation/pages/auth";

export const AuthSignInPageFactory = (): JSX.Element => {
  return (
    <AuthSignInPage
      signInRequestFn={
        new AuthSignInUseCase(makeHttpRequest(), "/auth/sign-in")
      }
    />
  );
};
