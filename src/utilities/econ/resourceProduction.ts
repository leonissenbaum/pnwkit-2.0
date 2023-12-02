import { resourceType } from "../../interfaces/data/econ";

/**
 * Get resource data
 * @param {number} cities How many cities you have
 * @param {number} resource What type of resource you are making
 * @param {number} slots How many slots are being used
 * @param {boolean} project If you are making uranium and have the project for the resource
 * @returns {number} How much of said resource you produce a day
 */
export default function resourceProduction(cities: number, resource: resourceType, slots: number, project?: boolean): number {

    switch (resource) {
        case resourceType.BAUXITE:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;

        case resourceType.COAL:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;

        case resourceType.IRON:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;

        case resourceType.LEAD:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;

        case resourceType.OIL:
            return (slots * 0.25 * (1 + 0.5 * Math.max(slots - 1, 0) / (10 - 1))) * cities * 12;

        case resourceType.GASOLINE:
            return (slots * (project ? 1 : 0.5) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;

        case resourceType.STEEL:
            return (slots * (project ? 1.02 : 0.75) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;

        case resourceType.ALUMINUM:
            return (slots * (project ? 1.02 : 0.75) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;

        case resourceType.MUNITIONS:
            return (slots * (project ? 2.01 : 1.5) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;

        case resourceType.URANIUM:
            return (slots * (project ? 1 : 0.5) * (1 + 0.5 * Math.max(slots - 1, 0) / (5 - 1))) * cities * 12;
    }
}