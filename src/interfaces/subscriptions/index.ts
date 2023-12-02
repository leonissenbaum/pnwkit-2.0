export enum subscriptionEvent {
    CREATE = 'create',
    UPDATE = 'update',
    DELETE = 'delete',
}

export enum subscriptionModel {
    ALLIANCE = 'alliance',
    ALLIANCEPOSITION = 'alliance_position',
    BANKREC = 'bankrec',
    BBGAME = 'bbgame',
    BBTEAM = 'bbteam',
    BOUNTY = 'bounty',
    CITY = 'city',
    NATION = 'nation',
    TAXBRACKET = 'tax_bracket',
    TRADE = 'trade',
    TREATY = 'treaty',
    WARATTACK = 'warattack',
    WAR = 'war',
    TREASURETRADE = 'treasure_trade',
    EMBARGO = 'embargo',
    ACCOUNT = 'account',
}

export type subscriptionFilters = {
    id?: number[],
    sender_id?: number[],
    sender_type?: number,
    receiver_id?: number[],
    receiver_type?: number,
    team_id?: number[],
    nation_id?: number[],
    alliance_id?: number[],
    offer_resource?: string
    buy_or_sell?: string,
    war_id?: number[],
    att_alliance_id?: number[],
    def_alliance_id?: number[],
}

export interface channelSubscription {
    channel: string
}