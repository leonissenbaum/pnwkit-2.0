import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { nation } from "./nation";
export declare enum bountyType {
    ORDINARY = "ORDINARY",
    ATTRITION = "ATTRITION",
    RAID = "RAID",
    NUCLEAR = "NUCLEAR"
}
export type bountyPaginator = {
    __typename?: 'BountyPaginator';
    paginatorInfo: paginatorInfo;
    data: Array<bounty>;
};
export type queryBountiesOrderByOrderByClause = {
    column: queryBountiesOrderByColumn;
    order: sortOrder;
};
export declare enum queryBountiesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Amount = "AMOUNT"
}
export type queryBountiesArgs = {
    nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    min_amount?: Maybe<Scalars['Float']>;
    max_amount?: Maybe<Scalars['Float']>;
    orderBy?: Maybe<Array<queryBountiesOrderByOrderByClause>>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type bounty = {
    __typename?: 'bounty';
    id?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['Date']>;
    nation_id?: Maybe<Scalars['ID']>;
    nation?: Maybe<nation>;
    amount?: Maybe<Scalars['Int']>;
    type?: Maybe<bountyType>;
};
