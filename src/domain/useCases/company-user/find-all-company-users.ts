import { generateQueryParams } from "@/domain/helpers";
import {
  CollaboratorsFiltersProps,
  FindAllCompanyUsersProps,
  HttpClient,
  IFindAllCompanyUsers,
} from "@/domain/interfaces";

export class FindAllCompanyUsers implements IFindAllCompanyUsers {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly findAllCompanyUsersUrl: string
  ) {}

  async run(
    data?: CollaboratorsFiltersProps
  ): Promise<FindAllCompanyUsersProps> {
    return this.httpClient.get<FindAllCompanyUsersProps>({
      uri: `${this.findAllCompanyUsersUrl}${generateQueryParams(data)}`,
    });
  }
}
