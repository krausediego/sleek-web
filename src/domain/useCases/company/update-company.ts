import { HttpClient, IUpdateCompany } from "@/domain/interfaces";

export class UpdateCompany implements IUpdateCompany {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly updateCompanyUrl: string
  ) {}

  async run(data: IUpdateCompany.Params): Promise<void> {
    await this.httpClient.put({
      uri: this.updateCompanyUrl,
      data,
      dataAs: "formdata",
    });
  }
}
