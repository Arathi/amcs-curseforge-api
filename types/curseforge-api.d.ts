import GetModFilesParameters from "./schemas/requests/get-mod-files";
import SearchModsParameters from "./schemas/requests/search-mods";
import { GetCategoriesResponse, GetModFilesResponse, SearchModsResponse } from "./schemas/responses/alias";
import DataResponse from "./schemas/responses/data";
import Mod from "./schemas/responses/mod";
import ModFile from "./schemas/responses/mod-file";
export declare const BASE_URL = "https://api.curseforge.com";
export declare const DEFAULT_API_KEY: string;
export declare const GAME_ID_MINECRAFT = 432;
export declare const CLASS_ID_MODS = 6;
export declare const DEFAULT_PAGE_SIZE = 50;
export type QueryParameters = Record<string, string | number | boolean | undefined>;
export interface CurseForgeApiOptions {
    baseURL?: string;
    apiKey?: string;
}
export default abstract class CurseForgeApi {
    baseURL: string;
    apiKey: string;
    constructor({ baseURL, apiKey, }: CurseForgeApiOptions);
    get headers(): {
        "x-api-key": string;
    };
    getCategories(gameId?: number, classId?: number, classesOnly?: boolean): Promise<GetCategoriesResponse>;
    searchMods(params?: SearchModsParameters): Promise<SearchModsResponse>;
    getMod(modId: number): Promise<DataResponse<Mod>>;
    getModFiles(modId: number, params?: GetModFilesParameters): Promise<GetModFilesResponse>;
    getModFile(modId: number, fileId: number): Promise<DataResponse<ModFile>>;
    getModFileDownloadURL(modId: number, fileId: number): Promise<DataResponse<string>>;
    abstract get<R>(uri: string, params?: QueryParameters): Promise<R>;
}
