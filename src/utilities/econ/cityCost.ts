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

    //new city cost code
    /*
    let costs = {
        cityPrice: 0,
        resourcePrice: 0,
        lead: 0,
        iron: 0,
        steel: 0,
        bauxite: 0,
        aluminum: 0,
    }

    let percentage = 0;

    MD ? percentage += 5 : 0;
    GSA ? percentage += 2.5 : 0;

    for (let i = startingCity; i < endingCity; i++) {
        let formula = 0;
        let cityPercent = 0;

        if (i >= 21 && MP)
            formula = (50000 * (i - 1) ^ 3 + 150000 * i + 75000) - 250000000;
        else if (i >= 16 && AUP)
            formula = (50000 * (i - 1) ^ 3 + 150000 * i + 75000) - 150000000;
        else if (i >= 11 && UP)
            formula = (50000 * (i - 1) ^ 3 + 150000 * i + 75000) - 50000000;

        if (i > 40) {
            cityPercent = 5;
            costs.lead += ((i % 40) * 300);
            costs.iron += ((i % 40) * 300);
            costs.steel += ((i % 40) * 300);
            costs.bauxite += ((i % 40) * 300);
            costs.aluminum += ((i % 40) * 300);
        }
        else if (i > 30) {
            cityPercent = 2.5;
            costs.lead += ((i % 30) * 200);
            costs.iron += ((i % 30) * 200);
            costs.steel += ((i % 30) * 200);
            costs.bauxite += ((i % 30) * 200);
            costs.aluminum += ((i % 30) * 200);
        }
        else if (i > 20) {
            cityPercent = 2.5;
            costs.lead += ((i % 20) * 100);
            costs.iron += ((i % 20) * 100);
            costs.steel += ((i % 20) * 100);
            costs.bauxite += ((i % 20) * 100);
            costs.aluminum += ((i % 20) * 100);
        }

        costs.cityPrice += formula - getPercentage(formula, (percentage + cityPercent));
    }

    costs.resourcePrice += ((costs.aluminum * resourcePrices.aluminum!) + (costs.bauxite * resourcePrices.bauxite!) + (costs.steel * resourcePrices.steel!) + (costs.iron * resourcePrices.lead!) + (costs.iron * resourcePrices.lead!));
    */

    let costs = 0;
    let percentage = 0;

    MD ? percentage += 5 : 0;
    GSA ? percentage += 2.5 : 0;

    for (let i = startingCity; i < endingCity; i++) {
        let formula = 0;
        let cityPercent = 0;

        if (i >= 21 && MP)
            formula = (50000 * (i - 1) ^ 3 + 150000 * i + 75000) - 250000000;
        else if (i >= 16 && AUP)
            formula = (50000 * (i - 1) ^ 3 + 150000 * i + 75000) - 150000000;
        else if (i >= 11 && UP)
            formula = (50000 * (i - 1) ^ 3 + 150000 * i + 75000) - 50000000;

        costs += formula - getPercentage(formula, (percentage + cityPercent));
    }

    return costs;
}