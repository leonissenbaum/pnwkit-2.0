import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { alliance } from "./alliance";
export declare enum queryTreatiesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    TurnsLeft = "TURNS_LEFT"
}
export type queryTreatiesOrderByOrderByClause = {
    column: queryTreatiesOrderByColumn;
    order: sortOrder;
};
export type treatyPaginator = {
    __typename?: 'treatyPaginator';
    paginatorInfo: paginatorInfo;
    data: Array<treaty>;
};
export type queryTreatiesArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    orderBy?: Maybe<Array<queryTreatiesOrderByOrderByClause>>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type treaty = {
    __typename?: 'treaty';
    id?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['DateTimeAuto']>;
    treaty_type?: Maybe<Scalars['String']>;
    treaty_url?: Maybe<Scalars['String']>;
    turns_left?: Maybe<Scalars['Int']>;
    alliance1_id?: Maybe<Scalars['ID']>;
    alliance1?: Maybe<alliance>;
    alliance2_id?: Maybe<Scalars['ID']>;
    alliance2?: Maybe<alliance>;
    approved?: Maybe<Scalars['Boolean']>;
};
