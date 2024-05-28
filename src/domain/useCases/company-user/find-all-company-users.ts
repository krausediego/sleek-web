import {
  FindAllCompanyUsersProps,
  HttpClient,
  IFindAllCompanyUsers,
} from "@/domain/interfaces";

export class FindAllCompanyUsers implements IFindAllCompanyUsers {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly findAllCompanyUsersUrl: string
  ) {}

  async run(): Promise<FindAllCompanyUsersProps> {
    return this.httpClient.get<FindAllCompanyUsersProps>({
      uri: this.findAllCompanyUsersUrl,
    });
  }
}
