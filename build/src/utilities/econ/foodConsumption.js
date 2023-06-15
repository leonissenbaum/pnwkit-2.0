"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the amount of food consumed in a day
 * @param {number} basePopulation The base population of your cities
 * @param {number} cityAge The age of your oldest city
 * @param {number} cities How many cities you have
 * @returns {number} How much food you consume in a day
 */
function foodConsumption(basePopulation, cityAge, cities) {
    return ((basePopulation) ^ 2 / 125000000 + ((basePopulation) * (1 + Math.log(cityAge) / 15) - basePopulation) / 850) * cities;
}
exports.default = foodConsumption;
