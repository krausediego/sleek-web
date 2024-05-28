import { makeHttpRequest } from "@/application/factories";
import { FindAllCompanyUsers } from "@/domain/useCases";

export const findAllCompanyUsersFn = new FindAllCompanyUsers(
  makeHttpRequest(),
  "/company-user/find-all"
);
