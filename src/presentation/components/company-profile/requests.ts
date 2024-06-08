import { makeHttpRequest } from "@/application/factories";
import {
  AuthSignOutUseCase,
  FindCompany,
  UpdateCompany,
} from "@/domain/useCases";

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
