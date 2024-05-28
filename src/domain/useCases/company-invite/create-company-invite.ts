import {
  CompanyInvite,
  HttpClient,
  ICreateCompanyInvite,
} from "@/domain/interfaces";

export class CreateCompanyInvite implements ICreateCompanyInvite {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly createCompanyInviteUrl: string
  ) {}

  async run(): Promise<CompanyInvite> {
    return this.httpClient.post<CompanyInvite>({
      uri: this.createCompanyInviteUrl,
    });
  }
}
