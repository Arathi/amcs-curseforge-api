import Pagination from "./pagination";
export default interface DataResponse<D> {
    data: D;
}
export interface PaginationResponse<D> extends DataResponse<D[]> {
    pagination: Pagination;
}
