import { queryAlliancesArgs } from "./queries/alliance";
import { queryBankrecsArgs } from "./queries/bank";
import { queryBountiesArgs } from "./queries/bounty";
import { queryCitiesArgs } from "./queries/city";
import { queryNationsArgs } from "./queries/nation";
import { queryTradesArgs } from "./queries/trade";
import { queryTradepricesArgs } from "./queries/tradePrice";
import { queryTreatiesArgs } from "./queries/treaty";
import { queryWarsArgs } from "./queries/war";
import { queryWarattacksArgs } from "./queries/warAttack";

export type anyQuery =
    queryNationsArgs |
    queryAlliancesArgs |
    queryTradepricesArgs |
    queryTradesArgs |
    queryWarsArgs |
    queryBankrecsArgs |
    queryBountiesArgs |
    queryCitiesArgs |
    queryWarattacksArgs |
    queryTreatiesArgs |
    queryTreatiesArgs;

export type AnyQuery =
    queryNationsArgs;

export type Maybe<T> = T | null;

export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTimeAuto: any
    Date: any
    DateTime: any
    DateTimeTz: any
}