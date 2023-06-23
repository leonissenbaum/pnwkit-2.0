import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { alliancePositionEnum } from "./alliance";
import { nation } from "./nation";
import { warAttack } from "./warAttack";
export declare enum warType {
    Ordinary = "ORDINARY",
    Attrition = "ATTRITION",
    Raid = "RAID"
}
export type queryWarsOrderByOrderByClause = {
    column: queryWarsOrderByColumn;
    order: sortOrder;
};
export declare enum queryWarsOrderByColumn {
    Id = "ID",
    Date = "DATE"
}
export type warPaginator = {
    __typename?: 'WarPaginator';
    paginatorInfo: paginatorInfo;
    data: Array<war>;
};
export type queryWarsArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    active?: Maybe<Scalars['Boolean']>;
    nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    alliance_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    min_id?: Maybe<Scalars['Int']>;
    max_id?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<queryWarsOrderByOrderByClause>>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type war = {
    __typename?: 'war';
    id?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['DateTimeAuto']>;
    reason?: Maybe<Scalars['String']>;
    war_type?: Maybe<warType>;
    ground_control?: Maybe<Scalars['ID']>;
    air_superiority?: Maybe<Scalars['ID']>;
    naval_blockade?: Maybe<Scalars['ID']>;
    winner_id?: Maybe<Scalars['ID']>;
    attacks: Array<warAttack>;
    turns_left?: Maybe<Scalars['Int']>;
    att_id?: Maybe<Scalars['ID']>;
    att_alliance_id?: Maybe<Scalars['ID']>;
    att_alliance_position?: Maybe<alliancePositionEnum>;
    attacker?: Maybe<nation>;
    def_id?: Maybe<Scalars['ID']>;
    def_alliance_id?: Maybe<Scalars['ID']>;
    def_alliance_position?: Maybe<alliancePositionEnum>;
    defender?: Maybe<nation>;
    att_points?: Maybe<Scalars['Int']>;
    def_points?: Maybe<Scalars['Int']>;
    att_peace?: Maybe<Scalars['Boolean']>;
    def_peace?: Maybe<Scalars['Boolean']>;
    att_resistance?: Maybe<Scalars['Int']>;
    def_resistance?: Maybe<Scalars['Int']>;
    att_fortify?: Maybe<Scalars['Boolean']>;
    def_fortify?: Maybe<Scalars['Boolean']>;
    att_gas_used?: Maybe<Scalars['Float']>;
    def_gas_used?: Maybe<Scalars['Float']>;
    att_mun_used?: Maybe<Scalars['Float']>;
    def_mun_used?: Maybe<Scalars['Float']>;
    att_alum_used?: Maybe<Scalars['Int']>;
    def_alum_used?: Maybe<Scalars['Int']>;
    att_steel_used?: Maybe<Scalars['Int']>;
    def_steel_used?: Maybe<Scalars['Int']>;
    att_infra_destroyed?: Maybe<Scalars['Float']>;
    def_infra_destroyed?: Maybe<Scalars['Float']>;
    att_money_looted?: Maybe<Scalars['Float']>;
    def_money_looted?: Maybe<Scalars['Float']>;
    att_soldiers_killed?: Maybe<Scalars['Int']>;
    def_soldiers_killed?: Maybe<Scalars['Int']>;
    att_tanks_killed?: Maybe<Scalars['Int']>;
    def_tanks_killed?: Maybe<Scalars['Int']>;
    att_aircraft_killed?: Maybe<Scalars['Int']>;
    def_aircraft_killed?: Maybe<Scalars['Int']>;
    att_ships_killed?: Maybe<Scalars['Int']>;
    def_ships_killed?: Maybe<Scalars['Int']>;
    att_missiles_used?: Maybe<Scalars['Int']>;
    def_missiles_used?: Maybe<Scalars['Int']>;
    att_nukes_used?: Maybe<Scalars['Int']>;
    def_nukes_used?: Maybe<Scalars['Int']>;
    att_infra_destroyed_value?: Maybe<Scalars['Float']>;
    def_infra_destroyed_value?: Maybe<Scalars['Float']>;
};
