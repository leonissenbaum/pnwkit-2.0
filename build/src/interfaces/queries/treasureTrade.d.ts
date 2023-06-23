import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { nation } from "./nation";
export type queryTreasureTradesOrderByOrderByClause = {
    column: queryTreasureTradesOrderByColumn;
    order: sortOrder;
};
export declare enum queryTreasureTradesOrderByColumn {
    ID = "ID"
}
export type treasureTradePaginator = {
    __typename?: 'TreasureTradePaginator';
    paginatorInfo: paginatorInfo;
    data: Array<treasureTrade>;
};
export type queryTreasureTradesArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    min_id?: Maybe<Scalars['Int']>;
    max_id?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<queryTreasureTradesOrderByOrderByClause>>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type treasureTrade = {
    id?: Maybe<Scalars['ID']>;
    offer_date?: Maybe<Scalars['DateTimeAuto']>;
    accept_date?: Maybe<Scalars['DateTimeAuto']>;
    sender_id?: Maybe<Scalars['DateTimeAuto']>;
    sender?: Maybe<nation>;
    receiver_id?: Maybe<Scalars['ID']>;
    receiver?: Maybe<nation>;
    buying?: Maybe<Scalars['Boolean']>;
    selling?: Maybe<Scalars['Boolean']>;
    treasure?: Maybe<Scalars['String']>;
    money?: Maybe<Scalars['Int']>;
    accepted?: Maybe<Scalars['Boolean']>;
    rejected?: Maybe<Scalars['Boolean']>;
    seller_cancelled?: Maybe<Scalars['Boolean']>;
};
