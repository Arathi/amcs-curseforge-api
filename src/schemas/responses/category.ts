export default interface Category {
  id: number;
  name: string;
  slug: string;
  url: string;
  iconUrl: string;
  dateModified: string;
  isClass?: boolean | null;
  classId?: number | null;
  parentCategoryId?: number | null;
  displayIndex?: number | null;
}
