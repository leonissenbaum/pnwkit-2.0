import { operationType } from "../../interfaces/data/war";
/**
 * Get spy odds
 * @param {number} safetyLevel The safety level of the spy operation
 * @param {operationType} operation The type of operation you want to run
 * @param {number} yourSpies How many spies you have
 * @param {number} enemySpies How many spies the enemy has
 * @returns {number} spy odds
 */
export default function espionageOdds(safetyLevel: number, operation: operationType, yourSpies: number, enemySpies: number): number;
