export * from "./category";
export * from "./mod";
export * from "./mod-file";

import type { Category } from "./category";
import type { Mod } from "./mod";
import type { ModFile } from "./mod-file";
import type { Pagination } from "./pagination";

export type DataResponse<D = unknown> = {
  data: D;
};

export type PaginationResponse<D = unknown> = DataResponse<Array<D>> & {
  pagination: Pagination;
};

export type GetCategoriesResponse = DataResponse<Category[]>;
export type SearchModsResponse = PaginationResponse<Mod>;
export type GetModFilesResponse = PaginationResponse<ModFile>;
