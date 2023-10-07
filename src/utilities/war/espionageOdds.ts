import { operationType, warPolicy } from "../../interfaces/data/war";

/**
 * Get spy odds
 * @param {number} safetyLevel The safety level of the spy operation
 * @param {operationType} operation The type of operation you want to run
 * @param {number} yourSpies How many spies you have
 * @param {number} enemySpies How many spies the enemy has
 * @returns {number} spy odds
 */
export default function espionageOdds(safetyLevel: number, operation: operationType, yourSpies: number, enemySpies: number, policy: warPolicy): number {
    let odds = safetyLevel * 25 + (yourSpies * 100 / ((enemySpies * 3) + 1));

    switch (operation) {

        case operationType.TANKS:
            odds = odds / 1.5;
            break;

        case operationType.AIRCRAFT:
            odds = odds / 2;
            break;

        case operationType.SHIPS:
            odds = odds / 3;
            break;

        case operationType.MISSILES:
            odds = odds / 4;
            break;

        case operationType.NUKES:
            odds = odds / 5;
            break;

        case operationType.GATHERINTELLIGENCE:
            odds = odds / 1;
            break;

        case operationType.ASSASSINATESPIES:
            odds = odds / 1.5;
            break;

        case operationType.SOLDIERS:
            odds = odds / 1;
            break;

        case operationType.TERRORIZECIVILIANS:
            odds = odds / 1;
            break;
    }

    switch (policy) {

        case warPolicy.ARCANE:
            odds *= 0.85
            break;

        case warPolicy.TACTICIAN:
            odds *= 1.15
            break;

        case warPolicy.COVERT:
            odds *= 1.15
            break;

        default:
            break;
    }

    if (odds > 100)
        odds = 100;

    return odds;
}