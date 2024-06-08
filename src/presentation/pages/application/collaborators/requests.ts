import { makeHttpRequest } from "@/application/factories";
import { DeleteCompanyUser, FindAllCompanyUsers } from "@/domain/useCases";

export const findAllCompanyUsersFn = new FindAllCompanyUsers(
  makeHttpRequest(),
  "/company-user/find-all"
);

export const deleteCompanyUserFn = new DeleteCompanyUser(
  makeHttpRequest(),
  "/company-user/delete"
);
