import ModLoaderType from "@/schemas/commons/mod-loader-type";
export default interface GetModFilesParameters {
    gameVersion?: string;
    modLoaderType?: ModLoaderType;
    index?: number;
    pageSize?: number;
}
