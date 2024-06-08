import { HttpClient, IUpdateUserProfile } from "@/domain/interfaces";

export class UpdateUserProfile implements IUpdateUserProfile {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly updateUserProfileUrl: string
  ) {}

  async run(data: IUpdateUserProfile.Params): Promise<void> {
    await this.httpClient.put({
      uri: this.updateUserProfileUrl,
      data,
      dataAs: "formdata",
    });
  }
}
