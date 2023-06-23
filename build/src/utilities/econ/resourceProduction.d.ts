import { resourceType } from "../../interfaces/data/econ";
/**
 * Get how many resources
 * @param {number} cities How many cities you have
 * @param {number} resource What type of resource you are making
 * @param {number} slots How many slots are being used
 * @param {boolean} project If you are making uranium and have the project for the resource
 * @returns {number} How much of said resource you produce a day
 */
export default function resourceProduction(cities: number, resource: resourceType, slots: number, project?: boolean): number;
