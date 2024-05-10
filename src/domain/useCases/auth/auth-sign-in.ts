import { HttpClient, IAuthSignIn } from "@/domain/interfaces";

export class AuthSignInUseCase implements IAuthSignIn {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly authSignInUrl: string
  ) {}

  async run(data: IAuthSignIn.Params): Promise<any> {
    await this.httpClient.post({
      uri: `http://localhost:3333/api${this.authSignInUrl}`,
      data,
    });
  }
}
