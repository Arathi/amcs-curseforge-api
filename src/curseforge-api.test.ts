import { expect, test } from "vitest";
import CurseForgeClient from "./curseforge-client";
import ModLoaderType from "./schemas/commons/mod-loader-type";

const apiKey = process.env.CURSE_FORGE_API_KEY ?? "";
const MOD_ID_JEI = 238222;
const MOD_FILE_ID_JEI = 5733186;
const MOD_FILE_NAME = "jei-1.20.1-forge-15.19.0.89.jar";

const client = new CurseForgeClient(apiKey);

test("获取分类", async () => {
  const resp = await client.getCategories();
  const categories = resp.data;
  console.info(`获取到分类 ${categories.length} 个`);
  expect(categories.length).toBeGreaterThan(0);
  const mcMods = categories.find((cat) => cat.slug === "mc-mods");
  expect(mcMods?.id).toBe(6);
});

test("搜索模组", async () => {
  const resp = await client.searchMods({
    slug: "jei",
  });
  const mods = resp.data;
  console.info(`获取到模组 ${mods.length} 个`);
  expect(mods.length).toBe(1);
  const jei = mods[0];
  expect(jei.id).toBe(MOD_ID_JEI);
});

test("获取指定模组", async () => {
  const resp = await client.getMod(MOD_ID_JEI);
  const jei = resp.data;
  console.info("获取到模组：", jei.name);
  expect(jei.slug).toBe("jei");
});

test("获取模组文件列表", async () => {
  const resp = await client.getModFiles(MOD_ID_JEI, {
    modLoaderType: ModLoaderType.Forge,
    gameVersion: "1.20.1",
  });
  const files = resp.data;
  console.info(`获取到模组文件 ${files.length} 个`);
  expect(files.length).toBeGreaterThan(0);
  const latest = files[0];
  expect(latest.modId).toBe(MOD_ID_JEI);
});

test("获取指定模组文件", async () => {
  const resp = await client.getModFile(MOD_ID_JEI, MOD_FILE_ID_JEI);
  const file = resp.data;
  console.info(`获取到模组文件名：`, file.fileName);
  expect(file.fileName).toBe(MOD_FILE_NAME);
});

test("获取模组文件下载地址", async () => {
  const modId = MOD_ID_JEI;
  const fileId = MOD_FILE_ID_JEI;
  const resp = await client.getModFileDownloadURL(modId, fileId);
  console.info("下载地址：", resp.data);
  const url = new URL(resp.data);
  const fileIdStr = `${fileId}`;
  const upperExpect = fileIdStr.substring(0, 4);
  const lowerExpect = fileIdStr.substring(4);
  const [_, files, upper, lower, fileName] = url.pathname.split("/");
  expect(files).toBe("files");
  expect(upper).toBe(upperExpect);
  expect(lower).toBe(lowerExpect);
  expect(fileName).toBe(MOD_FILE_NAME);
});
