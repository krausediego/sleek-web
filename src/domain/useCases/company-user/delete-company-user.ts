import { HttpClient, IDeleteCompanyUser } from "@/domain/interfaces";

export class DeleteCompanyUser implements IDeleteCompanyUser {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly deleteCompanyUserUrl: string
  ) {}

  async run({ id }: IDeleteCompanyUser.Params): Promise<void> {
    return this.httpClient.delete({
      uri: `${this.deleteCompanyUserUrl}?id=${id}`,
    });
  }
}
