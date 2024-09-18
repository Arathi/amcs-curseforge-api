import GetModFilesParameters from "./schemas/requests/get-mod-files";
import SearchModsParameters, {
  SortField,
} from "./schemas/requests/search-mods";
import {
  GetCategoriesResponse,
  GetMinecraftModLoadersResponse,
  GetMinecraftVersionsResponse,
  GetModFilesResponse,
  SearchModsResponse,
} from "./schemas/responses";
import DataResponse from "./schemas/responses/data";

export const BASE_URL = "https://api.curseforge.com";
export const DEFAULT_API_KEY = process.env.CURSE_FORGE_API_KEY ?? "";
export const GAME_ID_MINECRAFT = 432;
export const CLASS_ID_MODS = 6;
export const DEFAULT_PAGE_SIZE = 50;

export interface CurseForgeApiOptions {
  baseURL?: string;
  apiKey?: string;
}

export default abstract class CurseForgeApi {
  baseURL: string;
  apiKey: string;

  constructor({
    baseURL = BASE_URL,
    apiKey = DEFAULT_API_KEY,
  }: CurseForgeApiOptions) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  get headers() {
    return {
      "x-api-key": this.apiKey,
    };
  }

  getCategories(
    gameId: number = GAME_ID_MINECRAFT,
    classId?: number,
    classesOnly?: boolean
  ): Promise<GetCategoriesResponse> {
    return this.get(`/v1/categories`, {
      gameId,
      classId,
      classesOnly,
    });
  }

  searchMods(params: SearchModsParameters = {}): Promise<SearchModsResponse> {
    const {
      classId = CLASS_ID_MODS,
      categoryIdList = [],
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

    return this.get(`/v1/mods/search`, {
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

  getModFileDownloadURL(
    modId: number,
    fileId: number
  ): Promise<DataResponse<string>> {
    return this.get(`/v1/mods/${modId}/files/${fileId}/download-url`);
  }

  getMinecraftVersions(
    sortDescending?: boolean
  ): Promise<GetMinecraftVersionsResponse> {
    return this.get(`/v1/minecraft/version`, {
      sortDescending,
    });
  }

  getModLoaders(
    version?: string,
    includeAll?: boolean
  ): Promise<GetMinecraftModLoadersResponse> {
    return this.get(`/v1/minecraft/modloader`, {
      version,
      includeAll,
    });
  }

  abstract get<R>(
    uri: string,
    params?: Record<string, string | number | boolean | undefined>
  ): Promise<R>;
}
