import DataResponse, { PaginationResponse } from "./data";
import Category from "./category";
import Mod from "./mod";
import ModFile from "./mod-file";
type GetCategoriesResponse = DataResponse<Category[]>;
type SearchModsResponse = PaginationResponse<Mod>;
type GetModFilesResponse = PaginationResponse<ModFile>;
export type { GetCategoriesResponse, SearchModsResponse, GetModFilesResponse };
