"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const econ_1 = require("../../interfaces/data/econ");
/**
 * Get how many resources
 * @param {number} cities How many cities you have
 * @param {number} resource What type of resource you are making
 * @param {number} slots How many slots are being used
 * @param {boolean} project If you are making uranium and have the project for the resource
 * @returns {number} How much of said resource you produce a day
 */
function resourceProduction(cities, resource, slots, project) {
    switch (resource) {
        case econ_1.resourceType.BAUXITE:
            return Math.round(25 * slots * (1 + Math.max(slots - 1, 0) / 18)) / 100 * 12 * cities;
        case econ_1.resourceType.COAL:
            return Math.round(25 * slots * (1 + Math.max(slots - 1, 0) / 18)) / 100 * 12 * cities;
        case econ_1.resourceType.IRON:
            return Math.round(25 * slots * (1 + Math.max(slots - 1, 0) / 18)) / 100 * 12 * cities;
        case econ_1.resourceType.LEAD:
            return Math.round(25 * slots * (1 + Math.max(slots - 1, 0) / 18)) / 100 * 12 * cities;
        case econ_1.resourceType.OIL:
            return Math.round(25 * slots * (1 + Math.max(slots - 1, 0) / 18)) / 100 * 12 * cities;
        case econ_1.resourceType.GASOLINE:
            return Math.round((project ? 50 : 25) * slots * (1 + Math.max(slots - 1, 0) / 8)) / 100 * 12 * cities;
        case econ_1.resourceType.STEEL:
            return Math.round((project ? 75 : 37.5) * slots * (1 + Math.max(slots - 1, 0) / 8)) / 100 * 12 * cities;
        case econ_1.resourceType.ALUMINUM:
            return Math.round((project ? 75 : 37.5) * slots * (1 + Math.max(slots - 1, 0) / 8)) / 100 * 12 * cities;
        case econ_1.resourceType.MUNITIONS:
            return Math.round((project ? 105 : 50.25) * slots * (1 + Math.max(slots - 1, 0) / 8)) / 100 * 12 * cities;
        case econ_1.resourceType.URANIUM:
            return Math.round((project ? 50 : 25) * slots * (1 + Math.max(slots - 1, 0) / 8)) / 100 * 12 * cities;
    }
}
exports.default = resourceProduction;
//# sourceMappingURL=resourceProduction.js.map