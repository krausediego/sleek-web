import { makeHttpRequest } from "@/application/factories";
import {
  CreateCompanyInvite,
  DeleteCompanyInvite,
  FindAllCompanyInvites,
} from "@/domain/useCases";

export const findAllCompanyInvitesFn = new FindAllCompanyInvites(
  makeHttpRequest(),
  "/company-invite/find-all"
);

export const deleteCompanyInviteFn = new DeleteCompanyInvite(
  makeHttpRequest(),
  "/company-invite/delete"
);

export const createCompanyInviteFn = new CreateCompanyInvite(
  makeHttpRequest(),
  "/company-invite/create"
);
