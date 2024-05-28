import axios, { AxiosInstance } from "axios";
import { serialize } from "object-to-formdata";

import { HttpClient } from "@/domain/interfaces";

export class AxiosRequest implements HttpClient {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      withCredentials: true,
    });
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }

  async post(params: HttpClient.RequestData<any>): Promise<any> {
    const headers: any = {};

    const data = this.parseData(params.data, params.dataAs || "json");
    return this.instance
      .post(params.uri, data, { headers })
      .then((response) => response.data);
  }

  async put(params: HttpClient.RequestData<any>): Promise<any> {
    const headers: any = {};

    const data = this.parseData(params.data, params.dataAs || "json");
    return this.instance
      .put(params.uri, data, { headers })
      .then((response) => response.data);
  }

  async get(params: HttpClient.RequestData<any>): Promise<any> {
    const headers: any = {};

    return this.instance
      .get(params.uri, {
        headers,
        params: params.data ? this.parseData(params.data, "params") : undefined,
      })
      .then(async (response) => {
        if (process.env.NODE_ENV === "development") {
          await new Promise((resolve) => setTimeout(resolve, 4000));
        }
        return response.data;
      });
  }

  async delete(params: HttpClient.RequestData<any>): Promise<any> {
    const headers: any = {};

    return this.instance
      .delete(params.uri, {
        headers,
        params: params.data ? this.parseData(params.data, "params") : undefined,
      })
      .then((response) => response.data);
  }

  private parseData<T extends object>(
    data: T,
    type: "json" | "params" | "formdata"
  ): any {
    switch (type) {
      case "formdata":
        return serialize(data || {});
      case "params":
        const params = new URLSearchParams(); // eslint-disable-line
        Object.entries(data).forEach(([k, v]) => params.append(k, v));
        return params;
      default:
        return data;
    }
  }
}
