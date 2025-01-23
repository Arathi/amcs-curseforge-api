import axios from "axios";
import { CurseForgeApi, type CurseForgeApiOptions } from "../src";

export class CurseForgeApiAxios extends CurseForgeApi {
  constructor(options: CurseForgeApiOptions = {}) {
    super(options);
  }

  protected async get<R>(
    uri: string,
    params: Record<string, string | number | boolean | undefined> = {}
  ): Promise<R> {
    const url = this.buildURL(uri, params);
    const resp = await axios.get(url.toString(), {
      headers: this.headers,
    });
    return resp.data;
  }
}
