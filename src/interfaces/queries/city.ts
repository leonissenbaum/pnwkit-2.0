import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { nation } from "./nation";

export type cityPaginator = {
    __typename?: 'cityPaginator'
    paginatorInfo: paginatorInfo
    data: Array<city>
}

export enum queryCitiesOrderByColumn {
    Id = 'ID',
    Date = 'DATE',
    Infrastructure = 'INFRASTRUCTURE',
    Maxinfra = 'MAXINFRA',
    Land = 'LAND'
}

export type queryCitiesOrderByOrderByClause = {
    column: queryCitiesOrderByColumn
    order: sortOrder
}

export type queryCitiesArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    orderBy?: Maybe<Array<queryCitiesOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export type city = {
    __typename?: 'city'
    id?: Maybe<Scalars['ID']>
    nation_id?: Maybe<Scalars['ID']>
    nation?: Maybe<nation>
    name?: Maybe<Scalars['String']>
    date?: Maybe<Scalars['Date']>
    infrastructure?: Maybe<Scalars['Float']>
    land?: Maybe<Scalars['Float']>
    powered?: Maybe<Scalars['Boolean']>
    oil_power?: Maybe<Scalars['Int']>
    wind_power?: Maybe<Scalars['Int']>
    coal_power?: Maybe<Scalars['Int']>
    nuclear_power?: Maybe<Scalars['Int']>
    coal_mine?: Maybe<Scalars['Int']>
    oil_well?: Maybe<Scalars['Int']>
    uranium_mine?: Maybe<Scalars['Int']>
    barracks?: Maybe<Scalars['Int']>
    farm?: Maybe<Scalars['Int']>
    police_station?: Maybe<Scalars['Int']>
    hospital?: Maybe<Scalars['Int']>
    recycling_center?: Maybe<Scalars['Int']>
    subway?: Maybe<Scalars['Int']>
    supermarket?: Maybe<Scalars['Int']>
    bank?: Maybe<Scalars['Int']>
    shopping_mall?: Maybe<Scalars['Int']>
    stadium?: Maybe<Scalars['Int']>
    lead_mine?: Maybe<Scalars['Int']>
    iron_mine?: Maybe<Scalars['Int']>
    bauxite_mine?: Maybe<Scalars['Int']>
    oil_refinery?: Maybe<Scalars['Int']>
    aluminum_refinery?: Maybe<Scalars['Int']>
    steel_mill?: Maybe<Scalars['Int']>
    munitions_factory?: Maybe<Scalars['Int']>
    factory?: Maybe<Scalars['Int']>
    hangar?: Maybe<Scalars['Int']>
    drydock?: Maybe<Scalars['Int']>
    nuke_date?: Maybe<Scalars['DateTimeAuto']>
}