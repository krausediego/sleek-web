import { HttpClient } from "@/domain/interfaces";
import { AxiosRequest } from "@/infra/request";

export const makeHttpRequest = (): HttpClient => {
  return new AxiosRequest();
};
