import CurseForgeApi from "./curseforge-api";
import DefaultCurseForgeClient from "./default-curseforge-client";
import Category from "./schemas/responses/category";
import Mod from "./schemas/responses/mod";
import ModFile, {
  ReleaseType,
  FileDependency,
  FileRelationType,
} from "./schemas/responses/mod-file";
import ModLoaderType from "./schemas/commons/mod-loader-type";

export {
  DefaultCurseForgeClient,
  ModLoaderType,
  ReleaseType,
  FileRelationType,
};
export type { Category, Mod, ModFile, FileDependency };
export default CurseForgeApi;
