import { makeHttpRequest } from "@/application/factories";
import {
  AuthSignOutUseCase,
  FindCompany,
  FindUserProfileUseCase,
  UpdateCompany,
} from "@/domain/useCases";

export const findUserProfileFn = new FindUserProfileUseCase(
  makeHttpRequest(),
  "/user-profile/find"
);

export const authSignOutFn = new AuthSignOutUseCase(
  makeHttpRequest(),
  "/auth/sign-out"
);

export const findCompanyFn = new FindCompany(
  makeHttpRequest(),
  "/company/find"
);

export const updateCompanyFn = new UpdateCompany(
  makeHttpRequest(),
  "/company/update"
);
