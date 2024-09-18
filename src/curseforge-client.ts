import CurseForgeApi from "./curseforge-api";

export default class CurseForgeClient extends CurseForgeApi {
  constructor(apiKey: string) {
    super({
      apiKey,
    });
  }

  async get<R>(
    uri: string,
    params?: Record<string, string | number | boolean | undefined>
  ): Promise<R> {
    const url = new URL(`${this.baseURL}${uri}`);
    if (params !== undefined) {
      for (const name in params) {
        const value = params[name];
        if (value !== undefined) {
          url.searchParams.set(name, `${value}`);
        }
      }
    }
    // console.debug(`发送GET请求：`, url.toString());
    // console.debug("请求头：", this.headers);
    const resp = await fetch(url, {
      method: "GET",
      headers: this.headers,
    });
    // console.debug("HTTP状态码：", resp.status);
    const json = await resp.json();
    // console.debug("响应报文如下：", json);
    return json as R;
  }
}
