import {
  FindAllCompanyInvitesProps,
  HttpClient,
  IFindAllCompanyInvites,
} from "@/domain/interfaces";

export class FindAllCompanyInvites implements IFindAllCompanyInvites {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly findAllCompanyInvitesUrl: string
  ) {}

  async run(): Promise<FindAllCompanyInvitesProps> {
    return this.httpClient.get<FindAllCompanyInvitesProps>({
      uri: this.findAllCompanyInvitesUrl,
    });
  }
}
