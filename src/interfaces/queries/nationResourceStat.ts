import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";

export type nationResourceStatPaginator = {
    __typename?: 'nationPaginator'
    paginatorInfo: paginatorInfo
    data: Array<nationResourceStat>
}

export type queryNationResourceStatsOrderByOrderByClause = {
    column: queryNationResourceStatsOrderByColumn
    order: sortOrder
}

export enum queryNationResourceStatsOrderByColumn {
    DATE = 'DATE',
    MONEY = 'MONEY',
    FOOD = 'FOOD',
    STEEL = 'STEEL',
    ALUMINUM = 'ALUMINUM',
    GASOLINE = 'GASOLINE',
    MUNITIONS = 'MUNITIONS',
    URANIUM = 'URANIUM',
    COAL = 'COAL',
    OIL = 'OIL',
    IRON = 'IRON',
    BAUXITE = 'BAUXITE',
    LEAD = 'LEAD',
    }

export type queryNationResourceStatsArgs = {
    before?: Maybe<Scalars['DateTime']>
    after?: Maybe<Scalars['DateTime']>
    orderBy?: Maybe<queryNationResourceStatsOrderByOrderByClause>

}

export type nationResourceStat = {
    __typename?: 'nationResourceStat'
    date?: Maybe<Scalars['DateTimeAuto']>
    money?: Maybe<Scalars['String']>
    food?: Maybe<Scalars['String']>
    steel?: Maybe<Scalars['String']>
    aluminum?: Maybe<Scalars['String']>
    gasoline?: Maybe<Scalars['String']>
    munitions?: Maybe<Scalars['String']>
    uranium?: Maybe<Scalars['String']>
    coal?: Maybe<Scalars['String']>
    oil?: Maybe<Scalars['String']>
    iron?: Maybe<Scalars['String']>
    bauxite?: Maybe<Scalars['String']>
    lead?: Maybe<Scalars['String']>
}