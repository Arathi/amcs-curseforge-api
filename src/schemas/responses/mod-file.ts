export default interface ModFile {
  id: number;
  modId: number;
  displayName: string;
  fileName: string;
  hashes: FileHash[];
  fileDate: string;
  fileLength: number;
  downloadCount: number;
  downloadUrl: string;
  dependencies: FileDependency[];
  // fileModule: FileModule[];
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

// interface FileModule {
//   name: string;
//   fingerprint: BigInt;
// }
