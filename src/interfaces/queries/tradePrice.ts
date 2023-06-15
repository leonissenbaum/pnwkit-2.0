import { Maybe, Scalars } from "..";
import { paginatorInfo } from "../other";

export type tradePricePaginator = {
    __typename?: 'tradePricePaginator'
    paginatorInfo: paginatorInfo
    data: Array<tradeprice>
}

export type queryTradepricesArgs = {
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export type tradeprice = {
    __typename?: 'Tradeprice'
    id?: Maybe<Scalars['ID']>
    date?: Maybe<Scalars['Date']>
    coal?: Maybe<Scalars['Float']>
    oil?: Maybe<Scalars['Float']>
    uranium?: Maybe<Scalars['Float']>
    iron?: Maybe<Scalars['Float']>
    bauxite?: Maybe<Scalars['Float']>
    lead?: Maybe<Scalars['Float']>
    gasoline?: Maybe<Scalars['Float']>
    munitions?: Maybe<Scalars['Float']>
    steel?: Maybe<Scalars['Float']>
    aluminum?: Maybe<Scalars['Float']>
    food?: Maybe<Scalars['Float']>
    credits?: Maybe<Scalars['Float']>
}