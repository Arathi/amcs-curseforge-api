import { ModLoaderType } from "../mod-loader-type";

export default interface MinecraftModLoader {
  name: string;
  gameVersion: string;
  latest: boolean;
  recommended: boolean;
  dateModified: string;
  type: ModLoaderType;
}
