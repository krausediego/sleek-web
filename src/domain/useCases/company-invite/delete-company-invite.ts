import { HttpClient, IDeleteCompanyInvite } from "@/domain/interfaces";

export class DeleteCompanyInvite implements IDeleteCompanyInvite {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly deleteCompanyInviteUrl: string
  ) {}

  async run({ id }: IDeleteCompanyInvite.Params): Promise<void> {
    return this.httpClient.delete({
      uri: `${this.deleteCompanyInviteUrl}?id=${id}`,
    });
  }
}
