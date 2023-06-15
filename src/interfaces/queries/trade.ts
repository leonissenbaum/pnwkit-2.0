import { Maybe, Scalars } from ".."
import { paginatorInfo, sortOrder } from "../other"
import { nation } from "./nation"

export type queryTradesOrderByOrderByClause = {
    column: queryTradesOrderByColumn
    order: sortOrder
}

export enum queryTradesOrderByColumn {
    ID = 'ID',
    DATE = 'DATE',
    DATE_ACCEPTED = 'DATE_ACCEPTED',
    OFFER_RESOURCE = 'OFFER_RESOURCE',
    OFFER_AMOUNT = 'OFFER_AMOUNT',
    RETURN_AMOUNT = 'RETURN_AMOUNT',
}

export enum tradeType {
    Global = 'GLOBAL',
    Personal = 'PERSONAL',
    Alliance = 'ALLIANCE'
}

export type tradePaginator = {
    __typename?: 'tradePaginator'
    paginatorInfo: paginatorInfo
    data: Array<trade>
}

export type queryTradesArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    type?: Maybe<tradeType>
    nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    offer_resource?: Maybe<Scalars['String']>
    buy_or_sell?: Maybe<Scalars['String']>
    accepted?: Maybe<Scalars['Boolean']>
    orderBy?: Maybe<Array<queryTradesOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export type trade = {
    __typename?: 'Trade'
    id?: Maybe<Scalars['ID']>
    type?: Maybe<tradeType>
    date?: Maybe<Scalars['DateTimeAuto']>
    sender_id?: Maybe<Scalars['ID']>
    receiver_id?: Maybe<Scalars['ID']>
    sender?: Maybe<nation>
    receiver?: Maybe<nation>
    offer_resource?: Maybe<Scalars['String']>
    offer_amount?: Maybe<Scalars['Int']>
    buy_or_sell?: Maybe<Scalars['String']>
    price?: Maybe<Scalars['Int']>
    accepted?: Maybe<Scalars['Boolean']>
    date_accepted?: Maybe<Scalars['DateTimeAuto']>
    original_trade_id?: Maybe<Scalars['ID']>
}