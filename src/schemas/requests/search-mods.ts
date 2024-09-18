import { ModLoaderType } from "../mod-loader-type";

export default interface SearchModsParameters {
  classId?: number;
  categoryIdList?: number[];
  gameVersion?: string;
  searchFilter?: string;
  sortField?: SortField;
  sortOrder?: SortOrder;
  modLoaderType?: ModLoaderType;
  slug?: string;
  index?: number;
  pageSize?: number;
}

export enum SortField {
  Featured = 1,
  Popularity,
  LastUpdated,
  Name,
  Author,
  TotalDownloads,
  Category,
  GameVersion,
  EarlyAccess,
  FeaturedReleased,
  ReleasedDate,
  Rating,
}

export type SortOrder = "asc" | "desc";
