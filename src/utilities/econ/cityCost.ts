import { cityCosts } from "../../interfaces/data/econ";
import { tradeprice } from "../../interfaces/queries/tradePrice";
import getPercentage from "../other/getPercentage";

/**
 * Get the cost of cities
 * @param {number} startingCity The city count you are at now
 * @param {number} endingCity What city you want to be at
 * @param {boolean} UP If you have Urban Planning
 * @param {boolean} AUP If you have Advanced Urban Planning
 * @param {boolean} MP If you have Metropolitan Planning
 * @param {boolean} MD If you have Manifest Destiny
 * @param {boolean} GSA If you have Government Agency Support
 * @returns {number} The cost of cities
 */
export default function cityCost(startingCity: number, endingCity: number, UP: boolean, AUP: boolean, MP: boolean, MD: boolean, GSA: boolean): number {

    let costs = 0;
    let percentage = ((MD && GSA) ? 7.5 : (MD ? 5 : 0));

    for (let i = startingCity; i < endingCity; i++) {
        let formula = 0;

        if (i >= 21 && MP)
            formula = (50000 * Math.pow((i - 1), 3) + 150000 * i + 75000) - 250000000;
        else if (i >= 16 && AUP)
            formula = (50000 * Math.pow((i - 1), 3) + 150000 * i + 75000) - 150000000;
        else if (i >= 11 && UP)
            formula = (50000 * Math.pow((i - 1), 3) + 150000 * i + 75000) - 50000000;
        else
            formula = (50000 * Math.pow((i - 1), 3) + 150000 * i + 75000)

        costs += formula - getPercentage(formula, percentage);
    }

    return costs;
}