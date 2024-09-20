import CurseForgeApi, { QueryParameters } from "./curseforge-api";

export default class CurseForgeClient extends CurseForgeApi {
  constructor(apiKey: string) {
    super({
      apiKey,
    });
  }

  async get<R>(uri: string, params?: QueryParameters): Promise<R> {
    const url = new URL(`${this.baseURL}${uri}`);
    if (params !== undefined) {
      for (const name in params) {
        const value = params[name];
        if (value !== undefined) {
          url.searchParams.set(name, `${value}`);
        }
      }
    }
    const resp = await fetch(url, {
      method: "GET",
      headers: this.headers,
    });
    const json = await resp.json();
    return json as R;
  }
}
