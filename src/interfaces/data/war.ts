export enum operationType {
    GATHERINTELLIGENCE = 'intel',
    TERRORIZECIVILIANS = 'civilians',
    SOLDIERS = 'soldiers',
    TANKS = 'tanks',
    AIRCRAFT = 'aircraft',
    SHIPS = 'ships',
    ASSASSINATESPIES = 'spies',
    MISSILES = 'missiles',
    NUKES = 'nukes',
}

export type spyRanges = {
    OffensiveSpyRangeMin: number;
    OffensiveSpyRangeMax: number;
    DefensiveSpyRangeMin: number;
    DefensiveSpyRangeMax: number;
}

export type warRanges = {
    OffensiveWarRangeMin: number;
    OffensiveWarRangeMax: number;
    DefensiveWarRangeMin: number;
    DefensiveWarRangeMax: number;
}

export type activeWars = {
    offensive: number;
    defensive: number;
}

export type groundBattleData = {
    odds: {
        IT: number;
        MS: number;
        PV: number;
        UF: number;
    },
    attacker: {
        soldierCasualties: number;
        tankCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    },
    defender: {
        soldierCasualties: number;
        tankCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    }
}

export type airBattleData = {
    odds: {
        IT: number;
        MS: number;
        PV: number;
        UF: number;
    },
    attacker: {
        aircraftCasualties: number;
        aluminumConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    },
    defender: {
        aircraftCasualties: number;
        aluminumConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    }
}

export type seaBattleData = {
    odds: {
        IT: number;
        MS: number;
        PV: number;
        UF: number;
    },
    attacker: {
        shipCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    },
    defender: {
        shipCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    }
}