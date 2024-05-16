import { Company, HttpClient, IFindCompany } from "@/domain/interfaces";

export class FindCompany implements IFindCompany {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly findCompanyUrl: string
  ) {}

  async run(): Promise<Company> {
    return this.httpClient.get<Company>({
      uri: this.findCompanyUrl,
    });
  }
}
