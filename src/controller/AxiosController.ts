import axios, { AxiosResponse } from "axios";
import * as qs from "querystring";
import { General } from "../namespace/General";
import EHttpMethods = General.EHttpMethods;

export default class AxiosController  implements General.IController {
  private  options :  General.TControllerOptions;

  constructor(options : General.TControllerOptions) {
    this.options = options;
  }

  public async get<T>(path: string): Promise<General.TResponse<T>> {
    const res = await this.request<T>(EHttpMethods.GET, path);

    return this.prepareResponse<T>(res);
  }

  public async post<T>(path: string): Promise<General.TResponse<T>> {
    const res = await this.request<T>(EHttpMethods.POST, path);

    return this.prepareResponse<T>(res);
  }

  public async put<T>(path: string): Promise<General.TResponse<T>> {
    const res = await this.request<T>(EHttpMethods.PUT, path);

    return this.prepareResponse<T>(res);
  }

  public async delete<T>(path: string): Promise<General.TResponse<T>> {
    const res = await this.request<T>(EHttpMethods.DELETE, path);

    return this.prepareResponse<T>(res);
  }


  qs(query: string): this {
    const queryParams = qs.parse(query, "&", "=");
    this.options = { ...this.options, queryParams };
    return this;
  }

  searchParams(queryParams: Record<string, unknown>): this {
    this.options = { ...this.options, queryParams };
    return this;
  }

  body(data: Record<string, unknown>): this {
    this.options = { ...this.options, body: data };
    return this;
  }

  async request<T>(method : General.EHttpMethods, path : string = "") {
    return axios.request<T>({
      method,
      baseURL: this.options.baseUrl,
      url: path,
      params: this.options.queryParams,
    });
  }

  private prepareResponse<T>(res : AxiosResponse) : General.TResponse<T> {
    return {
      statusCode: res.status,
      body: res.data,
      headers: res.headers,
    };
  }
}