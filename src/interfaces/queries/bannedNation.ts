import { Maybe, Scalars } from ".."
import { paginatorInfo, sortOrder } from "../other"

export type queryBannedNationArgs = {
    nation_id?: Maybe<Scalars['Int']>
    leader_name?: Maybe<Scalars['String']>
    nation_name?: Maybe<Scalars['String']>
    orderBy?: Maybe<Array<queryBannedNationsOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export type queryBannedNationsOrderByOrderByClause = {
    column: queryBannedNationsOrderByColumn
    order: sortOrder
}

export enum queryBannedNationsOrderByColumn {
    NATION_ID = 'NATION_ID',
    DATE = 'DATE',
}

export type bannedNationPaginator = {
    __typename?: 'baseballGamePaginator'
    paginatorInfo: paginatorInfo
    data: Array<bannedNation>
}

export type bannedNation = {
    __typename?: 'BannedNation'
    nation_id?: Maybe<Scalars['ID']>
    reason?: Maybe<Scalars['String']>
    date?: Maybe<Scalars['DateTimeAuto']>
    days_left?: Maybe<Scalars['Int']>
}