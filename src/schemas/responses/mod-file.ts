export default interface ModFile {
  id: number;
  gameId: number;
  modId: number;
  displayName: string;
  fileName: string;
  releaseType: ReleaseType;
  hashes: FileHash[];
  fileDate: string;
  fileLength: number;
  downloadCount: number;
  downloadUrl: string;
  dependencies: FileDependency[];
}

export enum ReleaseType {
  Release = 1,
  Beta = 2,
  Alpha = 3,
}

export interface FileHash {
  value: string;
  algo: HashAlgo;
}

export enum HashAlgo {
  SHA1 = 1,
  MD5 = 2,
}

export interface FileDependency {
  modId: number;
  relationType: FileRelationType;
}

export enum FileRelationType {
  EmbeddedLibrary = 1,
  OptionalDependency = 2,
  RequiredDependency = 3,
  Tool = 4,
  Incompatible = 5,
  Include = 6,
}
