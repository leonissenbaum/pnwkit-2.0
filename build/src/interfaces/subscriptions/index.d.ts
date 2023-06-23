export declare enum subscriptionEvent {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete"
}
export type allianceSubscriptionFilters = {
    alliance_id?: number[];
};
export type bankRecSubscriptionFilters = {
    sender_id?: number[];
    receiver_id?: number[];
    receiver_type?: number;
};
export type baseballGameSubscriptionFilters = {
    team_id?: number;
};
export type baseballTeamSubscriptionFilters = {
    team_id?: number;
};
export type citySubscriptionFilters = {
    id?: number[];
    nation_id?: number[];
    alliance_id?: number[];
};
export type nationSubscriptionFilters = {
    nation_id?: number[];
    alliance_id?: number[];
};
export type TaxBracketSubscriptionFilters = {
    nation_id?: number[];
    alliance_id?: number[];
};
export type TradeSubscriptionFilters = {
    id?: number[];
    sender_id?: number;
    receiver_id?: number;
    offer_resource?: string;
    buy_or_sell?: string;
};
export type TreatySubscriptionFilters = {
    alliance_id?: number[];
};
export type warAttackSubscriptionFilters = {
    id?: number[];
    nation_id?: number[];
    alliance_id?: number[];
};
export type warSubscriptionFilters = {
    att_alliance_id?: number[];
    def_alliance_id?: number[];
};
export type embargoSubscriptionFilters = {
    nation_id?: number[];
    alliance_id?: number[];
};
export type treasureTradeSubscriptionFilters = {
    alliance_id?: number[];
};
