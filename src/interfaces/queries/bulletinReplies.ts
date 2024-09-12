import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { bulletin } from "./bulletin";
import { nation } from "./nation";

export type bulletinRepliesPaginator = {
    __typename?: 'bulletinRepliesPaginator'
    paginatorInfo: paginatorInfo
    data: Array<bulletinReplies>
}

export type queryBulletinRepliesOrderByOrderByClause = {
    column: queryBulletinRepliesOrderByColumn
    order: sortOrder
}

export enum queryBulletinRepliesOrderByColumn {
    ID = 'ID',
    DATE = 'DATE',
    EDIT_DATE = 'LAST_EDIT_DATE',
    ACCOUNT_ID = 'ACCOUNT_ID',
    BULLETIN_ID = 'BULLETIN_ID',
}

export type queryBulletinReplyArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    min_id?: Maybe<Scalars['Int']>
    max_id?: Maybe<Scalars['Int']>
    bulletin_id?: Maybe<Scalars['Int']>
    bulletin_min_id?: Maybe<Scalars['Int']>
    bulletin_max_id?: Maybe<Scalars['Int']>
    before?: Maybe<Scalars['DateTime']>
    after?: Maybe<Scalars['DateTime']>
    edited_before?: Maybe<Scalars['DateTime']>
    edited_since?: Maybe<Scalars['DateTime']>
    nation_id?: Maybe<Scalars['Int']>
    leader_name?: Maybe<Scalars['String']>
    nation_name?: Maybe<Scalars['String']>
    orderBy?: Maybe<Array<queryBulletinRepliesOrderByOrderByClause>>
}

export type bulletinReplies = {
    __typename?: 'bulletinReplies'
    id?: Maybe<Scalars['ID']>
    date?: Maybe<Scalars['DateTimeAuto']>
    nation_id?: Maybe<Scalars['ID']>
    nation?: Maybe<nation>
    bulletin_id?: Maybe<Scalars['ID']>
    bulletin?: Maybe<bulletin>
    message?: Maybe<Scalars['String']>
    edited?: Maybe<Scalars['DateTimeAuto']>
    nation_name?: Maybe<Scalars['String']>
    leader_name?: Maybe<Scalars['String']>
    like_count?: Maybe<Scalars['Int']>
}