import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { nation } from "./nation";
import { war } from "./war";

export enum queryWarattacksOrderByColumn {
    Id = 'ID',
    Date = 'DATE'
}

export type queryWarattacksOrderByOrderByClause = {
    column: queryWarattacksOrderByColumn
    order: sortOrder
}

export type warAttackPaginator = {
    __typename?: 'warAttackPaginator'
    paginatorInfo: paginatorInfo
    data: Array<warAttack>
}

export type queryWarattacksArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    min_id?: Maybe<Scalars['Int']>
    max_id?: Maybe<Scalars['Int']>
    war_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    orderBy?: Maybe<Array<queryWarattacksOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export enum attackType {
    AIRVINFRA = 'AIRVINFRA',
    AIRVSOLDIERS = 'AIRVSOLDIERS',
    AIRVTANKS = 'AIRVTANKS',
    AIRVMONEY = 'AIRVMONEY',
    AIRVSHIPS = 'AIRVSHIPS',
    AIRVAIR = 'AIRVAIR',
    GROUND = 'GROUND',
    MISSILE = 'MISSILE',
    MISSILEFAIL = 'MISSILEFAIL',
    NUKE = 'NUKE',
    NUKEFAIL = 'NUKEFAIL',
    NAVAL = 'NAVAL',
    FORTIFY = 'FORTIFY',
    PEACE = 'PEACE',
    VICTORY = 'VICTORY',
    ALLIANCELOOT = 'ALLIANCELOOT',
}

export type warAttack = {
    __typename?: 'warAttack'
    id?: Maybe<Scalars['ID']>
    date?: Maybe<Scalars['DateTimeAuto']>
    att_id?: Maybe<Scalars['ID']>
    attacker?: Maybe<nation>
    def_id?: Maybe<Scalars['ID']>
    defender?: Maybe<nation>
    type?: Maybe<attackType>
    war_id?: Maybe<Scalars['ID']>
    war?: Maybe<war>
    victor?: Maybe<Scalars['ID']>
    success?: Maybe<Scalars['Int']>
    attcas1?: Maybe<Scalars['Int']>
    defcas1?: Maybe<Scalars['Int']>
    attcas2?: Maybe<Scalars['Int']>
    defcas2?: Maybe<Scalars['Int']>
    city_id?: Maybe<Scalars['ID']>
    infra_destroyed?: Maybe<Scalars['Float']>
    improvements_lost?: Maybe<Scalars['Int']>
    money_stolen?: Maybe<Scalars['Float']>
    loot_info?: Maybe<Scalars['String']>
    resistance_eliminated?: Maybe<Scalars['Int']>
    city_infra_before?: Maybe<Scalars['Float']>
    infra_destroyed_value?: Maybe<Scalars['Float']>
    att_mun_used?: Maybe<Scalars['Float']>
    def_mun_used?: Maybe<Scalars['Float']>
    att_gas_used?: Maybe<Scalars['Float']>
    def_gas_used?: Maybe<Scalars['Float']>
    aircraft_killed_by_tanks?: Maybe<Scalars['Int']>
}