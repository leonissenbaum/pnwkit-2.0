import { foodProductionSeasons } from "../../interfaces/data/econ";

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
export default function foodProduction(cities: number, farms: number, land: number, MI: boolean, season: foodProductionSeasons, radiationIndex: number) {
    return (farms * land / (MI ? 400 : 500)) * season * radiationIndex * cities * 12;
}