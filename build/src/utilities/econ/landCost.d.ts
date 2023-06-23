/**
 * Get the cost of land
 * @param {number} startingAmount The amount of land you start with
 * @param {number} endingAmount The amount of land you want to be at
 * @param {number} cities How many cities you are building this infra in
 * @param {boolean} ALA If you have Arable Land Agency
 * @param {boolean} AEC If you have Advanced Engineering Corps
 * @param {boolean} URB If you have Rapid Expansion
 * @param {boolean} GSA If you have Government Agency Support
 * @returns {number} The cost of land
 */
export default function landCost(startingAmount: number, endingAmount: number, cities: number, ALA: boolean, AEC: boolean, RE: boolean, GSA: boolean): number;
