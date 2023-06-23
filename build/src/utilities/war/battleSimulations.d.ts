import { airBattleData, groundBattleData, seaBattleData } from "../../interfaces/data/war";
/**
 * Get the results from a ground battle
 * @param {number} attackingSoldiers The attacker's soldiers
 * @param {number} attackingTanks The attacker's tanks
 * @param {number} defendingSoldiers The defender's soldiers
 * @param {number} defendingTanks The defender's tanks
 * @returns {groundBattleData} ground battle results
 */
export declare function groundBattle(attackingSoldiers: number, attackingTanks: number, defendingSoldiers: number, defendingTanks: number): groundBattleData;
/**
 * Get the results from a air battle
 * @param {number} attackingAircraft The attacker's aircraft
 * @param {number} defendingAircraft The attacker's aircraft
 * @param {boolean} dogfight If the battle is a dog fight
 * @returns {airBattleData} air battle results
 */
export declare function airBattle(attackingAircraft: number, defendingAircraft: number, dogfight: boolean): airBattleData;
/**
 * Get the results from a sea battle
 * @param {number} attackingShips The attacker's ships
 * @param {number} defendingShips The attacker's ships
 * @returns {seaBattleData} sea battle results
 */
export declare function seaBattle(attackingShips: number, defendingShips: number): seaBattleData;
