import { CompanyInvite } from ".";

export interface ICreateCompanyInvite {
  run(): Promise<CompanyInvite>;
}
