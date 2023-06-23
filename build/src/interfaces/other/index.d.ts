import { Maybe, Scalars } from "..";
export type paginatorInfo = {
    __typename?: 'PaginatorInfo';
    count: Scalars['Int'];
    currentPage: Scalars['Int'];
    firstItem?: Maybe<Scalars['Int']>;
    hasMorePages: Scalars['Boolean'];
    lastItem?: Maybe<Scalars['Int']>;
    lastPage: Scalars['Int'];
    perPage: Scalars['Int'];
    total: Scalars['Int'];
};
export interface responseAndMetadataI {
    rateLimit: rateLimitI;
    data: any;
}
export interface rateLimitI {
    resetAfterSeconds: number;
    limit: number;
    remaining: number;
    reset: number;
}
export declare enum sortOrder {
    Asc = "ASC",
    Desc = "DESC"
}
