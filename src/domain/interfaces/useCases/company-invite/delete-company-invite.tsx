export interface IDeleteCompanyInvite {
  run({ id }: IDeleteCompanyInvite.Params): Promise<void>;
}

export namespace IDeleteCompanyInvite {
  export type Params = {
    id: number;
  };
}
