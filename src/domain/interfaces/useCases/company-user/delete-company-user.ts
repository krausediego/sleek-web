export interface IDeleteCompanyUser {
  run({ id }: IDeleteCompanyUser.Params): Promise<void>;
}

export namespace IDeleteCompanyUser {
  export type Params = {
    id: string;
  };
}
