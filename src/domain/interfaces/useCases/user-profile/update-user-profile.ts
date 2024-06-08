import { SpecialtyTypes } from ".";

export interface IUpdateUserProfile {
  run(data: IUpdateUserProfile.Params): Promise<void>;
}

export namespace IUpdateUserProfile {
  export type Params = {
    id: string;
    name?: string;
    avatar?: File;
    specialties?: SpecialtyTypes[];
  };
}
