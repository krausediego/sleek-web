export interface IAuthSignIn {
  run(data: IAuthSignIn.Params): Promise<void>;
}

export namespace IAuthSignIn {
  export type Params = {
    email: string;
    password: string;
  };
}
