import { city } from "../../interfaces/queries/city";
import getDaysBetween from "../other/getDaysBetween";

/**
 * Gets the amount of food consumed in a day
 * @param {number} basePopulation The base population of your cities
 * @param {number} cityAge The age of your oldest city
 * @param {number} cities How many cities you have
 * @returns {number} How much food you consume in a day
 */
export default function foodConsumption(cities: city[], soldiers: number, atWar?: boolean): number {
    if (!cities[0].infrastructure) throw new Error(`PnwKit: missing cities.infrastructure`);
    if (!cities[0].date) throw new Error(`PnwKit: missing cities.date`);

    const newDate = new Date();

    let cost = 0;

    for(let i = 0; i < cities.length; i++) {
        let city = cities[i];
        let oldDate = new Date(city.date);

        cost +=  (((city.infrastructure! * 100) ** 2) / 125_000_000) + (((city.infrastructure! * 100) * (1 + Math.max(Math.log(getDaysBetween(oldDate, newDate)) / 15, 0)) - city.infrastructure! * 100) / 850)
    }

    return cost + (atWar ? soldiers / 500 : soldiers / 750);
}