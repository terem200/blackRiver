import { AssertionError } from "assert";
import AxiosController from "./AxiosController";

export default class BaseController  extends AxiosController{
  public async get<T>(path: string) {
    const res = await super
      .get<T>(path);

    this.checkStatusCode(res.statusCode, true);
    return res;
  }

  public async getError<T>(path: string) {
    const res = await super
      .get<T>(path);

    this.checkStatusCode(res.statusCode, false);
    return res;
  }

  public async post<T>(path: string) {
    const res = await super
        .post<T>(path);

    this.checkStatusCode(res.statusCode, true);
    return res;
  }

  public async postError<T>(path: string) {
    const res = await super
        .post<T>(path);

    this.checkStatusCode(res.statusCode, false);
    return res;
  }

  public async put<T>(path: string) {
    const res = await super
        .put<T>(path);

    this.checkStatusCode(res.statusCode, true);
    return res;
  }

  public async putError<T>(path: string) {
    const res = await super
        .put<T>(path);

    this.checkStatusCode(res.statusCode, false);
    return res;
  }

  public async delete<T>(path: string) {
    const res = await super
        .delete<T>(path);

    this.checkStatusCode(res.statusCode, true);
    return res;
  }

  public async deleteError<T>(path: string) {
    const res = await super
        .delete<T>(path);

    this.checkStatusCode(res.statusCode, false);
    return res;
  }


  private checkStatusCode(statusCode : number, expectedPositive: boolean){
    if (expectedPositive){
      if (statusCode > 299 || statusCode < 200){
        throw new AssertionError({
          message: "Unexpected statusCode",
          actual: statusCode,
        });
      }
      else {
        return;
      }
    }
    else {
      if (statusCode < 400){
        throw new AssertionError({
          message: "Unexpected statusCode",
          actual: statusCode,
        });
      }
    }
  }

}
 