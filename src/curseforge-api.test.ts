import fetch from "node-fetch";
import CurseForgeApi from "./curseforge-api";
import { ModLoaderType } from "./schemas/mod-loader-type";

const API_KEY = process.env.CURSE_FORGE_API_KEY ?? "";
const MOD_ID_JEI = 238222;
const MOD_FILE_ID_JEI = 5733186;

class CurseForgeApiNodeFetch extends CurseForgeApi {
  constructor(apiKey: string = API_KEY) {
    super({
      apiKey,
    });
  }

  async get<R>(
    uri: string,
    params?: Record<string, string | number | boolean | undefined>
  ): Promise<R> {
    const url = new URL(`${this.baseURL}${uri}`);
    if (params !== undefined) {
      for (const name in params) {
        const value = params[name];
        if (value !== undefined) {
          url.searchParams.set(name, `${value}`);
        }
      }
    }

    const resp = await fetch(url, {
      method: "GET",
      headers: this.headers,
    });

    return resp.json();
  }
}

const client = new CurseForgeApiNodeFetch();

test("获取分类", async () => {
  const resp = await client.getCategories();
  const categories = resp.data;
  console.info(`获取到分类 ${categories.length} 个`);
  const mods = categories.find((cat) => cat.slug === "mc-mods");
  expect(mods).not.toBe(undefined);
  // console.info(`获取到mc-mods的分类信息如下：`, mods);
  expect(mods?.id).toBe(6);
});

test("搜索模组", async () => {
  const resp = await client.searchMods({
    gameVersion: "1.20.1",
    searchFilter: "JEI",
    modLoaderType: ModLoaderType.Forge,
  });
  const mods = resp.data;
  console.info(`获取到模组 ${mods.length} 个`);
  const jei = mods.find((mod) => mod.slug === "jei");
  expect(jei).not.toBe(undefined);
  // console.info(`获取到jei的模组信息如下：`, jei);
  expect(jei?.id).toBe(MOD_ID_JEI);
});

test("获取模组文件列表", async () => {
  const resp = await client.getModFiles(MOD_ID_JEI, {
    gameVersion: "1.20.1",
    modLoaderType: ModLoaderType.Forge,
  });
  const files = resp.data;
  console.info(`获取到模组文件 ${files.length} 个`);
  expect(files.length).not.toBe(0);
  const latest = files[0];
  // console.info(`获取到jei的最新版本信息如下：`, latest);
  expect(latest?.modId).toBe(MOD_ID_JEI);
});

test("获取模组文件下载地址", async () => {
  const resp = await client.getModFileDownloadURL(MOD_ID_JEI, MOD_FILE_ID_JEI);
  const fileId = `${MOD_FILE_ID_JEI}`;
  const index = fileId.length - 3;
  const upperExpect = fileId.substring(0, index);
  const lowerExpect = fileId.substring(index);
  const url = new URL(resp.data);
  const paths = url.pathname.split("/");
  console.info(`URI分解如下：`, paths);
  const [_, files, upper, lower, fileName] = paths;
  expect(files).toBe("files");
  expect(upper).toBe(upperExpect);
  expect(lower).toBe(lowerExpect);
});
