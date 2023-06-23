/**
 * Get the cost of infra
 * @param {number} startingAmount The amount of infra you start with
 * @param {number} endingAmount The amount of infra you want to be at
 * @param {number} cities How many cities you are building this infra in
 * @param {boolean} CCE If you have Center of Civil Engineering
 * @param {boolean} AEC If you have Advanced Engineering Corps
 * @param {boolean} URB If you have Urbanization
 * @param {boolean} GSA If you have Government Agency Support
 * @returns {number} The cost of infra
 */
export default function infraCost(startingAmount: number, endingAmount: number, cities: number, CCE: boolean, AEC: boolean, URB: boolean, GSA: boolean): number;
