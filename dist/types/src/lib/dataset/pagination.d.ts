/**
 * This module contains pagination helpers.
 */
export interface PaginationContext {
    /**
     * pagination context (i.e. number of results displayed per page and current page number)
     */
    pagesize: number;
    pageno: number;
    totalCount: number;
}
/**
 * Get number of total pages
 */
export declare function numberOfPages(paginationContext: PaginationContext): number;
/**
 * Get page offset
 */
export declare function pageOffset(pagesize: number, pageno: number): number;
/**
 * Get page min/max row
 */
export declare function pageMinMax(paginationContext: PaginationContext): {
    min: number;
    max: number;
};
