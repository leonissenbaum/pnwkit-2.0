import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { nation } from "./nation";

export type embargoPaginator = {
    __typename?: 'embargoPaginator'
    paginatorInfo: paginatorInfo
    data: Array<embargo>
}

export enum queryEmbargoesOrderByColumn {
    ID = 'ID',
    DATE = 'DATE',
}

export type queryEmbargoesOrderByOrderByClause = {
    column: queryEmbargoesOrderByColumn
    order: sortOrder
}

export enum embargoType {
    NATION_TO_NATION = "NATION_TO_NATION",
    NATION_TO_ALLIANCE = "NATION_TO_ALLIANCE",
    ALLIANCE_TO_NATION = "ALLIANCE_TO_NATION",
    ALLIANCE_TO_ALLIANCE = "ALLIANCE_TO_ALLIANCE",
}

export type queryEmbargoesArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    min_id?: Maybe<Scalars['Int']>
    max_id?: Maybe<Scalars['Int']>
    orderBy?: Maybe<Array<queryEmbargoesOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export type embargo = {
    id?: Maybe<Scalars['ID']>
    date?: Maybe<Scalars['Date']>
    sender_id?: Maybe<Scalars['ID']>
    sender?: Maybe<nation>
    receiver_id?: Maybe<Scalars['ID']>
    receiver?: Maybe<nation>
    reason?: Maybe<Scalars['String']>
    type?: Maybe<embargoType>
}