export namespace General {
  export type TControllerOptions = {
    baseUrl: string
    queryParams? : Record<string, unknown>,
    body? : Record<string, unknown>
    headers?: Record<string, string>
  };


  export type TResponse<T = unknown> = {
    body : T,
    statusCode : number,
    headers: Record<string, string>
  };

  export enum EHttpMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
  }

  export interface IController {
    post(path: string): Promise<TResponse>
    get(path: string): Promise<TResponse>
    put(path: string): Promise<TResponse>
    delete(path: string): Promise<TResponse>
    qs(query : string): IController
    searchParams(params : Record<string, unknown>): IController
    body(data : Record<string, unknown>): IController
  }

} 