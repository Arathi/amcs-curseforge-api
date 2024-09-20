import ModLoaderType from "@/schemas/commons/mod-loader-type";
export default interface SearchModsParameters {
    classId?: number;
    categoryIds?: number[];
    gameVersion?: string;
    searchFilter?: string;
    sortField?: SortField;
    sortOrder?: SortOrder;
    modLoaderType?: ModLoaderType;
    slug?: string;
    index?: number;
    pageSize?: number;
}
export declare enum SortField {
    Featured = 1,
    Popularity = 2,
    LastUpdated = 3,
    Name = 4,
    Author = 5,
    TotalDownloads = 6,
    Category = 7,
    GameVersion = 8,
    EarlyAccess = 9,
    FeaturedReleased = 10,
    ReleasedDate = 11,
    Rating = 12
}
export type SortOrder = "asc" | "desc";
