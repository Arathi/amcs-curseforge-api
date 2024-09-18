import DataResponse, { PaginationResponse } from "./data";
import Category from "./category";
import Mod from "./mod";
import ModFile from "./mod-file";
import MinecraftModLoader from "./minecraft-mod-loader";
import MinecraftGameVersion from "./minecraft-game-version";

type GetCategoriesResponse = DataResponse<Category[]>;
type SearchModsResponse = PaginationResponse<Mod>;
type GetModFilesResponse = PaginationResponse<ModFile>;
type GetMinecraftVersionsResponse = DataResponse<MinecraftGameVersion[]>;
type GetMinecraftModLoadersResponse = DataResponse<MinecraftModLoader[]>;

export {
  GetCategoriesResponse,
  SearchModsResponse,
  GetModFilesResponse,
  GetMinecraftVersionsResponse,
  GetMinecraftModLoadersResponse,
};
