import { Scalars } from "..";
import { paginatorInfo } from "../other";
import { trade } from "../queries/trade";

export type acceptPersonalTradePaginator = {
    __typename?: 'acceptPersonalTradePaginator'
    paginatorInfo: paginatorInfo
    data: trade
}

export type declinePersonalTradePaginator = {
    __typename?: 'declinePersonalTradePaginator'
    paginatorInfo: paginatorInfo
    data: trade
}


export type mutationacceptPersonalTradeArgs = {
    id: Scalars['Int']
    offer_amount: Scalars['Int']
}

export type mutationDeclinePersonalTradeArgs = {
    id: Scalars['Int']
}