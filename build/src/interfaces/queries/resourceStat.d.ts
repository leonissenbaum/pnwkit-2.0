import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
export type resourceStatPaginator = {
    __typename?: 'resourceStatPaginator';
    paginatorInfo: paginatorInfo;
    data: Array<resourceStat>;
};
export declare enum queryResourceStatsOrderByColumn {
    DATE = "DATE",
    MONEY = "MONEY",
    FOOD = "FOOD",
    STEEL = "STEEL",
    ALUMINUM = "ALUMINUM",
    GASOLINE = "GASOLINE",
    MUNITIONS = "MUNITIONS",
    URANIUM = "URANIUM",
    COAL = "COAL",
    OIL = "OIL",
    IRON = "IRON",
    BAUXITE = "BAUXITE",
    LEAD = "LEAD"
}
export type queryResourceStatsOrderByOrderByClause = {
    column: queryResourceStatsOrderByColumn;
    order: sortOrder;
};
export type queryResourceStatsArgs = {
    before?: Maybe<Scalars['DateTimeAuto']>;
    after?: Maybe<Scalars['DateTimeAuto']>;
    orderBy?: Maybe<queryResourceStatsOrderByOrderByClause>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type resourceStat = {
    money?: Maybe<Scalars['String']>;
    coal?: Maybe<Scalars['String']>;
    oil?: Maybe<Scalars['String']>;
    uranium?: Maybe<Scalars['String']>;
    iron?: Maybe<Scalars['String']>;
    bauxite?: Maybe<Scalars['String']>;
    lead?: Maybe<Scalars['String']>;
    gasoline?: Maybe<Scalars['String']>;
    munitions?: Maybe<Scalars['String']>;
    steel?: Maybe<Scalars['String']>;
    aluminum?: Maybe<Scalars['String']>;
    food?: Maybe<Scalars['String']>;
};
