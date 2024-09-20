export default interface Category {
  /**
   * 分类ID
   */
  id: number;

  /**
   * 游戏ID
   */
  gameId: number;

  /**
   * 名称
   */
  name: string;

  /**
   * SLUG
   */
  slug: string;

  /**
   * 分类页面地址
   */
  url: string;

  /**
   * 图标地址
   */
  iconUrl: string;

  /**
   * 修改时间
   */
  dateModified: string;

  /**
   * 是否为大类
   */
  isClass?: boolean | null;

  /**
   * 所属大类ID
   */
  classId?: number | null;

  /**
   * 上级分类ID
   */
  parentCategoryId?: number | null;

  /**
   * 显示顺序
   */
  displayIndex?: number | null;
}
