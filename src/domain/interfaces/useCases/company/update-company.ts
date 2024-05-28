import { SpecialtyTypes } from "@/domain/interfaces";

export interface IUpdateCompany {
  run(data: IUpdateCompany.Params): Promise<void>;
}

export namespace IUpdateCompany {
  export type Params = {
    id: string;
    name?: string;
    logo?: File;
    description?: string;
    types?: SpecialtyTypes[];
  };
}
