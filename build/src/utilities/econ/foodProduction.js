"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the cost of cities
 * @param {number} cities How many cities you have
 * @param {number} farms How many farms you have per city
 * @param {boolean} land How much land you have per city
 * @param {boolean} MI If you have Mass Irrigation
 * @param {foodProductionSeasons} season What season is it
 * @param {number} radiation What your radiation is right now
 * @returns {number} How much food you produce a day
 */
function foodProduction(cities, farms, land, MI, season, radiation) {
    return (farms * land / (MI ? 400 : 500)) * season * radiation * cities * 12;
}
exports.default = foodProduction;
