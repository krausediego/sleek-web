import {
  HttpClient,
  IFindUserProfile,
  UserProfileAndUser,
} from "@/domain/interfaces";

export class FindUserProfileUseCase implements IFindUserProfile {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly findUserProfileUrl: string
  ) {}

  async run(): Promise<UserProfileAndUser> {
    return this.httpClient.get<UserProfileAndUser>({
      uri: this.findUserProfileUrl,
    });
  }
}
