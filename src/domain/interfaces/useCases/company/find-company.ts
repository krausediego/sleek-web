import { Company } from ".";

export interface IFindCompany {
  run(): Promise<Company>;
}
