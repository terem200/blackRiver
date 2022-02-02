import { AssertionError } from "assert";
import AxiosController from "./AxiosController";

export default class BaseController  extends AxiosController{

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
}
 