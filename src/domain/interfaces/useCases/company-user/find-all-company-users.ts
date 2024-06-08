import { FindAllCompanyUsersProps } from ".";

import { SpecialtyTypes } from "..";

export interface IFindAllCompanyUsers {
  run(data?: CollaboratorsFiltersProps): Promise<FindAllCompanyUsersProps>;
}

export interface CollaboratorsFiltersProps {
  name?: string;
  email?: string;
  specialties?: SpecialtyTypes[];
}
