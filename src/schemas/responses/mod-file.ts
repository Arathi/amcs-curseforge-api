export default interface ModFile {
  /**
   * 文件ID
   */
  id: number;

  /**
   * 游戏ID
   */
  gameId: number;

  /**
   * 模组ID
   */
  modId: number;

  /**
   * 显示名称
   */
  displayName: string;

  /**
   * 文件名
   */
  fileName: string;

  /**
   * 发布类型
   *
   * 1 = Release
   * 2 = Beta
   * 3 = Alpha
   */
  releaseType: ReleaseType;

  /**
   * 文件散列值
   *
   * 分为 MD5 和 SHA1
   */
  hashes: FileHash[];

  /**
   * 发布日期
   */
  fileDate: string;

  /**
   * 字节数
   */
  fileLength: number;

  /**
   * 下载次数
   */
  downloadCount: number;

  /**
   * 下载链接
   */
  downloadUrl: string;

  /**
   * 依赖关系
   */
  dependencies: FileDependency[];
}

export enum ReleaseType {
  /**
   * 正式版
   */
  Release = 1,

  /**
   * Beta测试版
   */
  Beta = 2,

  /**
   * Alpha测试版
   */
  Alpha = 3,
}

export interface FileHash {
  /**
   * 散列值
   */
  value: string;

  /**
   * 散列算法
   */
  algo: HashAlgo;
}

export enum HashAlgo {
  SHA1 = 1,
  MD5 = 2,
}

export interface FileDependency {
  /**
   * 依赖模组ID
   */
  modId: number;

  /**
   * 依赖类型
   */
  relationType: FileRelationType;
}

export enum FileRelationType {
  /**
   * 内置库
   */
  EmbeddedLibrary = 1,

  /**
   * 可选依赖
   */
  OptionalDependency = 2,

  /**
   * 必要依赖
   */
  RequiredDependency = 3,

  /**
   * 工具
   */
  Tool = 4,

  /**
   * 未完成
   */
  Incompatible = 5,

  /**
   * 包含
   */
  Include = 6,
}
