"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seaBattle = exports.airBattle = exports.groundBattle = void 0;
const accurateRounding_1 = __importDefault(require("../other/accurateRounding"));
const getPercentage_1 = __importDefault(require("../other/getPercentage"));
/**
 * Get the results from a ground battle
 * @param {number} attackingSoldiers The attacker's soldiers
 * @param {number} attackingTanks The attacker's tanks
 * @param {number} defendingSoldiers The defender's soldiers
 * @param {number} defendingTanks The defender's tanks
 * @returns {groundBattleData} ground battle results
 */
function groundBattle(attackingSoldiers, attackingTanks, defendingSoldiers, defendingTanks) {
    let attackingValue = attackingSoldiers * 1.75 + attackingTanks * 40;
    let defendingValue = defendingSoldiers * 1.75 + defendingTanks * 40;
    let results = {
        odds: {
            IT: 0,
            MS: 0,
            PV: 0,
            UF: 0,
        },
        attacker: {
            soldierCasualties: 0,
            tankCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        },
        defender: {
            soldierCasualties: 0,
            tankCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        }
    };
    for (let i = 0; i < 100; i++) {
        let wins = 0;
        for (let j = 0; j < 3; j++) {
            let attackingRoll = (0, getPercentage_1.default)(attackingValue, Math.floor(Math.random() * 60) + 40);
            let defendingRoll = (0, getPercentage_1.default)(defendingValue, Math.floor(Math.random() * 60) + 40);
            if (attackingRoll > defendingRoll) {
                wins++;
                results.attacker.tankCasualties += (defendingSoldiers * 0.0004060606) + (defendingTanks * 0.00066666666);
                results.defender.tankCasualties += (attackingSoldiers * 0.00043225806) + (attackingTanks * 0.00070967741);
            }
            else {
                results.attacker.tankCasualties += (defendingSoldiers * 0.00043225806) + (defendingTanks * 0.00070967741);
                results.defender.tankCasualties += (attackingSoldiers * 0.0004060606) + (attackingTanks * 0.00066666666);
            }
            results.attacker.soldierCasualties += (defendingSoldiers * 0.0084) + (defendingTanks * 0.0092);
            results.defender.soldierCasualties += (attackingSoldiers * 0.0084) + (attackingTanks * 0.0092);
        }
        results.attacker.munitionsConsumed += (0, accurateRounding_1.default)(attackingSoldiers * 0.0002 + attackingTanks * 0.01, 2);
        results.attacker.gasConsumed += (0, accurateRounding_1.default)(attackingTanks * 0.01, 2);
        switch (wins) {
            case 0:
                results.odds.UF++;
                results.defender.munitionsConsumed += (0, accurateRounding_1.default)((defendingSoldiers * 0.0002 + defendingTanks * 0.01) * 0.4, 2);
                results.defender.gasConsumed += (0, accurateRounding_1.default)(defendingTanks * 0.4, 2);
                break;
            case 1:
                results.odds.PV++;
                results.defender.munitionsConsumed += (0, accurateRounding_1.default)((defendingSoldiers * 0.0002 + defendingTanks * 0.01) * 0.7, 2);
                results.defender.gasConsumed += (0, accurateRounding_1.default)(defendingTanks * 0.7, 2);
                break;
            case 2:
                results.odds.MS++;
                results.defender.munitionsConsumed += (0, accurateRounding_1.default)((defendingSoldiers * 0.0002 + defendingTanks * 0.01) * 0.9, 2);
                results.defender.gasConsumed += (0, accurateRounding_1.default)(defendingTanks * 0.9, 2);
                break;
            case 3:
                results.odds.IT++;
                results.defender.munitionsConsumed += (0, accurateRounding_1.default)(defendingSoldiers * 0.0002 + defendingTanks * 0.01, 2);
                results.defender.gasConsumed += (0, accurateRounding_1.default)(defendingTanks * 0.01, 2);
                break;
        }
    }
    results.attacker.soldierCasualties /= 100;
    results.attacker.steelConsumed = (results.attacker.tankCasualties * 0.5) / 100;
    results.attacker.tankCasualties /= 100;
    results.attacker.gasConsumed /= 100;
    results.attacker.munitionsConsumed /= 100;
    results.defender.soldierCasualties /= 100;
    results.defender.steelConsumed = (results.defender.tankCasualties * 0.5) / 100;
    results.defender.tankCasualties /= 100;
    results.defender.gasConsumed /= 100;
    results.defender.munitionsConsumed /= 100;
    return results;
}
exports.groundBattle = groundBattle;
/**
 * Get the results from a air battle
 * @param {number} attackingAircraft The attacker's aircraft
 * @param {number} defendingAircraft The attacker's aircraft
 * @param {boolean} dogfight If the battle is a dog fight
 * @returns {airBattleData} air battle results
 */
function airBattle(attackingAircraft, defendingAircraft, dogfight) {
    let attackingValue = attackingAircraft * 3;
    let defendingValue = defendingAircraft * 3;
    let results = {
        odds: {
            IT: 0,
            MS: 0,
            PV: 0,
            UF: 0,
        },
        attacker: {
            aircraftCasualties: 0,
            aluminumConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        },
        defender: {
            aircraftCasualties: 0,
            aluminumConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        }
    };
    for (let i = 0; i < 100; i++) {
        let wins = 0;
        for (let j = 0; j < 3; j++) {
            let attackingRoll = (0, getPercentage_1.default)(attackingValue, Math.floor(Math.random() * 60) + 40);
            let defendingRoll = (0, getPercentage_1.default)(defendingValue, Math.floor(Math.random() * 60) + 40);
            if (attackingRoll > defendingRoll) {
                wins++;
            }
            if (dogfight) {
                results.attacker.aircraftCasualties += (defendingRoll * 0.01);
                results.defender.aircraftCasualties += (attackingRoll * 0.018337);
            }
            else {
                results.attacker.aircraftCasualties += (defendingRoll * 0.015385);
                results.defender.aircraftCasualties += (attackingRoll * 0.009091);
            }
        }
        results.attacker.munitionsConsumed += (0, accurateRounding_1.default)(attackingAircraft * 0.25, 2);
        results.attacker.gasConsumed += (0, accurateRounding_1.default)(attackingAircraft * 0.25, 2);
        results.defender.munitionsConsumed += (0, accurateRounding_1.default)(defendingAircraft * 0.25, 2);
        results.defender.gasConsumed += (0, accurateRounding_1.default)(defendingAircraft * 0.25, 2);
        switch (wins) {
            case 0:
                results.odds.UF++;
                break;
            case 1:
                results.odds.PV++;
                break;
            case 2:
                results.odds.MS++;
                break;
            case 3:
                results.odds.IT++;
                break;
        }
    }
    results.attacker.aluminumConsumed = (results.attacker.aircraftCasualties * 5) / 100;
    results.attacker.aircraftCasualties /= 100;
    results.attacker.gasConsumed /= 100;
    results.attacker.munitionsConsumed /= 100;
    results.defender.aluminumConsumed = (results.attacker.aircraftCasualties * 5) / 100;
    results.defender.aircraftCasualties /= 100;
    results.defender.gasConsumed /= 100;
    results.defender.munitionsConsumed /= 100;
    return results;
}
exports.airBattle = airBattle;
/**
 * Get the results from a sea battle
 * @param {number} attackingShips The attacker's ships
 * @param {number} defendingShips The attacker's ships
 * @returns {seaBattleData} sea battle results
 */
function seaBattle(attackingShips, defendingShips) {
    let attackingValue = attackingShips * 4;
    let defendingValue = defendingShips * 4;
    let results = {
        odds: {
            IT: 0,
            MS: 0,
            PV: 0,
            UF: 0,
        },
        attacker: {
            shipCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        },
        defender: {
            shipCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        }
    };
    for (let i = 0; i < 100; i++) {
        let wins = 0;
        for (let j = 0; j < 3; j++) {
            let attackingRoll = (0, getPercentage_1.default)(attackingValue, Math.floor(Math.random() * 60) + 40);
            let defendingRoll = (0, getPercentage_1.default)(defendingValue, Math.floor(Math.random() * 60) + 40);
            if (attackingRoll > defendingRoll) {
                wins++;
            }
            results.attacker.shipCasualties += (defendingRoll * 0.01375);
            results.defender.shipCasualties += (attackingRoll * 0.01375);
        }
        results.attacker.munitionsConsumed += (0, accurateRounding_1.default)(attackingShips * 2.5, 2);
        results.attacker.gasConsumed += (0, accurateRounding_1.default)(attackingShips * 1.5, 2);
        results.defender.munitionsConsumed += (0, accurateRounding_1.default)(defendingShips * 1.5, 2);
        results.defender.gasConsumed += (0, accurateRounding_1.default)(defendingShips * 2.5, 2);
        switch (wins) {
            case 0:
                results.odds.UF++;
                break;
            case 1:
                results.odds.PV++;
                break;
            case 2:
                results.odds.MS++;
                break;
            case 3:
                results.odds.IT++;
                break;
        }
    }
    results.attacker.steelConsumed = (results.attacker.shipCasualties * 30) / 100;
    results.attacker.shipCasualties /= 100;
    results.attacker.gasConsumed /= 100;
    results.attacker.munitionsConsumed /= 100;
    results.defender.steelConsumed = (results.attacker.shipCasualties * 30) / 100;
    results.defender.shipCasualties /= 100;
    results.defender.gasConsumed /= 100;
    results.defender.munitionsConsumed /= 100;
    return results;
}
exports.seaBattle = seaBattle;
