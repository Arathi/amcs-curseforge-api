import Category from "./category";

export default interface Mod {
  id: number;
  name: string;
  slug: string;
  summary: string;
  downloadCount: number;
  primaryCategoryId: number;
  categories: Category[];
  classId?: number;
  authors: Author[];
  logo: ModAsset;
  dateCreated: string;
  dateModified: string;
  dateReleased: string;
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
