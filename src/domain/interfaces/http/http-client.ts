import { AxiosInstance } from "axios";

export interface HttpClient {
  getInstance(): AxiosInstance;
  post<R = any>(params: HttpClient.RequestData): Promise<R>;
  put<R = any>(params: HttpClient.RequestData): Promise<R>;
  get<R = any>(params: HttpClient.RequestData): Promise<R>;
  delete<R = any>(params: HttpClient.RequestData): Promise<R>;
}

export namespace HttpClient {
  export type RequestData<D = unknown> = {
    uri: string;
    data?: D;
    dataAs?: "json" | "params" | "formdata";
  };
}
