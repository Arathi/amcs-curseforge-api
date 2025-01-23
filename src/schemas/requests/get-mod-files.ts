import type { ModLoaderType } from "../commons/mod-loader-type";

export type GetModFilesParameters = {
  gameVersion?: string;
  modLoaderType?: ModLoaderType;
  index?: number;
  pageSize?: number;
};
