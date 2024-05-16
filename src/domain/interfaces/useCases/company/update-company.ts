import { SpecialtyTypes } from "@/domain/interfaces";

export interface IUpdateCompany {
  run(data: IUpdateCompany.Params): Promise<void>;
}

export namespace IUpdateCompany {
  export type Params = {
    id: string;
    name?: string;
    logo?: {
      fileName: string;
      buffer: Buffer;
      mimetype: string;
    };
    description?: string;
    types?: SpecialtyTypes[];
  };
}
