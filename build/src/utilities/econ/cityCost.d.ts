import { cityCosts } from "../../interfaces/data/econ";
import { tradeprice } from "../../interfaces/queries/tradePrice";
/**
 * Get the cost of cities
 * @param {number} startingCity The city count you are at now
 * @param {number} endingCity What city you want to be at
 * @param {tradeprice} resourcePrices The Prices of resources
 * @param {boolean} UP If you have Urban Planning
 * @param {boolean} AUP If you have Advanced Urban Planning
 * @param {boolean} MP If you have Metropolitan Planning
 * @param {boolean} MD If you have Manifest Destiny
 * @param {boolean} GSA If you have Government Agency Support
 * @returns {cityCosts} The cost of cities
 */
export default function cityCost(startingCity: number, endingCity: number, resourcePrices: tradeprice, UP: boolean, AUP: boolean, MP: boolean, MD: boolean, GSA: boolean): cityCosts;
