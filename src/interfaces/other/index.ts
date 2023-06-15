import { Maybe, Scalars } from "..";

export type paginatorInfo = {
    __typename?: 'PaginatorInfo'
    count: Scalars['Int']
    currentPage: Scalars['Int']
    firstItem?: Maybe<Scalars['Int']>
    hasMorePages: Scalars['Boolean']
    lastItem?: Maybe<Scalars['Int']>
    lastPage: Scalars['Int']
    perPage: Scalars['Int']
    total: Scalars['Int']
}

export interface responseAndMetadataI {
    rateLimit: rateLimitI;
    data: any;
}

export interface rateLimitI {
    // The number of seconds until the rate limit resets.
    resetAfterSeconds: number;
    // The maximum number of requests per rate limit period.
    limit: number;
    //  The remaining number of requests before the rate limit is reached.
    //  If this reaches zero you should wait the number of seconds in
    //  X-RateLimit-Reset-After before attempting another request.
    remaining: number;
    // The unix timestamp at which point the rate limit resets.
    reset: number;
}


export enum sortOrder {
    Asc = 'ASC',
    Desc = 'DESC'
}