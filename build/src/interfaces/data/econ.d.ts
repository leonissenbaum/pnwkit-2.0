export declare enum foodProductionSeasons {
    SPRING = 1,
    SUMMER = 1.2,
    FALL = 1,
    WINTER = 0.8
}
export declare enum resourceType {
    OIL = "oil",
    LEAD = "lead",
    BAUXITE = "bauxite",
    URANIUM = "uranium",
    COAL = "coal",
    IRON = "iron",
    STEEL = "steel",
    ALUMINUM = "aluminum",
    GASOLINE = "gasoline",
    MUNITIONS = "munitions"
}
export type cityCosts = {
    cityPrice: number;
    resourcePrice: number;
    lead: number;
    iron: number;
    steel: number;
    bauxite: number;
    aluminum: number;
};
