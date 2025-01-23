import type {
  GetCategoriesResponse,
  SearchModsParameters,
  SearchModsResponse,
  DataResponse,
  Mod,
  GetModFilesParameters,
  GetModFilesResponse,
  ModFile,
} from "./schemas";

import { SortField } from "./schemas";

const DEFAULT_BASE_URL = "https://api.curseforge.com";
const DEFAULT_API_KEY = process.env.CURSEFORGE_API_KEY ?? "";
const GAME_ID_MINECRAFT = 432;
const CLASS_ID_MODS = 6;
const DEFAULT_PAGE_SIZE = 50;

export type Options = {
  baseURL?: string;
  apiKey?: string;
};

export type Parameters = Record<string, string | number | boolean | undefined>;

export class CurseForgeApi {
  protected baseURL: string;
  protected apiKey: string;

  constructor({
    baseURL = DEFAULT_BASE_URL,
    apiKey = DEFAULT_API_KEY,
  }: Options = {}) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  protected get headers() {
    return {
      "x-api-key": this.apiKey,
    };
  }

  set API_KEY(value: string) {
    this.apiKey = value;
  }

  protected async get<R>(uri: string, params: Parameters = {}): Promise<R> {
    const url = this.buildURL(uri, params);
    const resp = await fetch(url, {
      method: "GET",
      headers: this.headers,
    });
    const respJson = await resp.json();
    return respJson as R;
  }

  protected buildURL(uri: string, params: Parameters = {}) {
    const url = new URL(`${this.baseURL}${uri}`);
    for (const key in params) {
      const value = params[key];
      if (value !== undefined) {
        url.searchParams.append(key, value.toString());
      }
    }
    return url;
  }

  getCategories(
    gameId: number = GAME_ID_MINECRAFT,
    classId?: number,
    classesOnly?: boolean
  ): Promise<GetCategoriesResponse> {
    return this.get("/v1/categories", {
      gameId,
      classId,
      classesOnly,
    });
  }

  searchMods(params: SearchModsParameters = {}): Promise<SearchModsResponse> {
    const {
      classId = CLASS_ID_MODS,
      categoryIds: categoryIdList = [],
      gameVersion,
      searchFilter,
      sortField = SortField.Popularity,
      sortOrder = "desc",
      modLoaderType,
      slug,
      index = 0,
      pageSize = DEFAULT_PAGE_SIZE,
    } = params;

    let categoryIds: string | undefined = undefined;
    if (categoryIdList.length > 0) {
      categoryIds = categoryIdList.join(",");
    }

    return this.get("/v1/mods/search", {
      gameId: GAME_ID_MINECRAFT,
      classId,
      categoryIds,
      gameVersion,
      searchFilter,
      sortField,
      sortOrder,
      modLoaderType,
      slug,
      index,
      pageSize,
    });
  }

  getMod(modId: number): Promise<DataResponse<Mod>> {
    return this.get(`/v1/mods/${modId}`);
  }

  getModFiles(
    modId: number,
    params: GetModFilesParameters = {}
  ): Promise<GetModFilesResponse> {
    const {
      gameVersion,
      modLoaderType,
      index = 0,
      pageSize = DEFAULT_PAGE_SIZE,
    } = params;
    return this.get(`/v1/mods/${modId}/files`, {
      gameVersion,
      modLoaderType,
      index,
      pageSize,
    });
  }

  getModFile(modId: number, fileId: number): Promise<DataResponse<ModFile>> {
    return this.get(`/v1/mods/${modId}/files/${fileId}`);
  }

  getModFileDownloadURL(
    modId: number,
    fileId: number
  ): Promise<DataResponse<string>> {
    return this.get(`/v1/mods/${modId}/files/${fileId}/download-url`);
  }
}
