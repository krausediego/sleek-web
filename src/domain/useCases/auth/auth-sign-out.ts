import { HttpClient, IAuthSignOut } from "@/domain/interfaces";

export class AuthSignOutUseCase implements IAuthSignOut {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly authSignOutUrl: string
  ) {}

  async run(): Promise<void> {
    await this.httpClient.post({
      uri: this.authSignOutUrl,
    });
  }
}
