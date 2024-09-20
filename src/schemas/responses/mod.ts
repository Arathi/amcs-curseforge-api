import Category from "./category";

export default interface Mod {
  /**
   * 模组数字ID
   */
  id: number;

  /**
   * 游戏编号，Minecraft固定为432
   */
  gameId: number;

  /**
   * 模组名称
   */
  name: string;

  /**
   * 模组英文标识
   */
  slug: string;

  /**
   * 链接
   */
  links: ModLinks;

  /**
   * 描述
   */
  summary: string;

  /**
   * 下载次数
   */
  downloadCount: number;

  /**
   * 主要分类ID
   */
  primaryCategoryId: number;

  /**
   * 分类信息列表
   */
  categories: Category[];

  /**
   * 大类ID
   */
  classId?: number;

  /**
   * 作者信息列表
   */
  authors: Author[];

  /**
   * Logo
   */
  logo: ModAsset;

  /**
   * 截图
   */
  screenshots: ModAsset[];

  /**
   * 主文件ID
   */
  mainFileId: number;

  /**
   * 创建时间
   */
  dateCreated: string;

  /**
   * 修改时间
   */
  dateModified: string;

  /**
   * 发布时间
   */
  dateReleased: string;

  /**
   * 是否允许分发
   */
  allowModDistribution?: boolean | null;

  /**
   * 流行度
   */
  gamePopularityRank: number;

  /**
   * 是否可用
   */
  isAvailable: boolean;

  /**
   * 点赞次数
   */
  thumbsUpCount: number;

  /**
   * 评分
   */
  rating?: number | null;
}

export interface ModLinks {
  websiteUrl: string;
  wikiUrl: string;
  issuesUrl: string;
  sourceUrl: string;
}

export interface Author {
  id: number;
  name: string;
  url: string;
}

export interface ModAsset {
  id: number;
  modId: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  url: string;
}
