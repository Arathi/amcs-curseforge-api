import CurseForgeApi, { QueryParameters } from "./curseforge-api";
export default class CurseForgeClient extends CurseForgeApi {
    constructor(apiKey: string);
    get<R>(uri: string, params?: QueryParameters): Promise<R>;
}
