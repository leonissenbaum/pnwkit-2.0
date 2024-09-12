import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { alliance } from "./alliance";
import { bulletinRepliesPaginator } from "./bulletinReplies";
import { nation } from "./nation";

export type bulletinPaginator = {
    __typename?: 'bulletinPaginator'
    paginatorInfo: paginatorInfo
    data: Array<bulletin>
}

export type queryBulletinsOrderByOrderByClause = {
    column: queryBulletinsOrderByColumn
    order: sortOrder
}

export enum queryBulletinsOrderByColumn {
    ID = 'ID',
    DATE = 'DATE',
    LAST_EDIT_DATE = 'LAST_EDIT_DATE',
}

export type queryBulletinArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    min_id?: Maybe<Scalars['Int']>
    max_id?: Maybe<Scalars['Int']>
    before?: Maybe<Scalars['DateTime']>
    after?: Maybe<Scalars['DateTime']>
    edited_before?: Maybe<Scalars['DateTime']>
    edited_since?: Maybe<Scalars['DateTime']>
    nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    type?: Maybe<Scalars['Int']>
    alliance_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    orderBy?: Maybe<Array<queryBulletinsOrderByOrderByClause>>
}

export type bulletin = {
    __typename?: 'bulletin'
    id?: Maybe<Scalars['ID']>
    nation_id?: Maybe<Scalars['ID']>
    nation?: Maybe<nation>
    alliance_id?: Maybe<Scalars['ID']>
    alliance?: Maybe<alliance>
    type?: Maybe<Scalars['Int']>
    headline?: Maybe<Scalars['String']>
    excerpt?: Maybe<Scalars['String']>
    image?: Maybe<Scalars['String']>
    body?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    pinned?: Maybe<Scalars['Boolean']>
    like_count?: Maybe<Scalars['Int']>
    replies_enabled?: Maybe<Scalars['Boolean']>
    locked?: Maybe<Scalars['Boolean']>
    date?: Maybe<Scalars['DateTimeAuto']>
    archived?: Maybe<Scalars['Boolean']>
    replies?: Maybe<bulletinRepliesPaginator>
}