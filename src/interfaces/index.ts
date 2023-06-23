import { MutationbankDepositArgs } from "./mutations/bankDeposit";
import { queryActivityStatsArgs } from "./queries/activityStat";
import { queryAlliancesArgs } from "./queries/alliance";
import { queryBankrecsArgs } from "./queries/bank";
import { queryBaseballGamesArgs, queryBaseballPlayersArgs, queryBaseballTeamsArgs } from "./queries/baseball";
import { queryBountiesArgs } from "./queries/bounty";
import { queryCitiesArgs } from "./queries/city";
import { queryEmbargoesArgs } from "./queries/embargo";
import { queryNationsArgs } from "./queries/nation";
import { queryResourceStatsArgs } from "./queries/resourceStat";
import { queryTradesArgs } from "./queries/trade";
import { queryTradepricesArgs } from "./queries/tradePrice";
import { queryTreasureTradesArgs } from "./queries/treasureTrade";
import { queryTreatiesArgs } from "./queries/treaty";
import { queryWarsArgs } from "./queries/war";
import { queryWarattacksArgs } from "./queries/warAttack";

export type anyCall =
    queryActivityStatsArgs |
    queryAlliancesArgs |
    queryBankrecsArgs |
    queryBaseballGamesArgs |
    queryBaseballPlayersArgs |
    queryBaseballTeamsArgs |
    queryBountiesArgs |
    queryCitiesArgs |
    queryEmbargoesArgs |
    queryNationsArgs |
    queryResourceStatsArgs |
    queryTradepricesArgs |
    queryTradesArgs |
    queryTreasureTradesArgs |
    queryTreatiesArgs |
    queryWarattacksArgs |
    queryWarsArgs |
    MutationbankDepositArgs;

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