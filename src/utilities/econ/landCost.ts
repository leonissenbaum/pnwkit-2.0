import accurateRounding from "../other/accurateRounding";
import getPercentage from "../other/getPercentage";

/**
 * Get the cost of land
 * @param {number} startingAmount The amount of land you start with
 * @param {number} endingAmount The amount of land you want to be at
 * @param {number} cities How many cities you are building this infra in
 * @param {boolean} ALA If you have Arable Land Agency
 * @param {boolean} AEC If you have Advanced Engineering Corps
 * @param {boolean} URB If you have Rapid Expansion
 * @param {boolean} GSA If you have Government Agency Support
 * @returns {number} The cost of land
 */
export default function landCost(startingAmount: number, endingAmount: number, cities: number, ALA: boolean, AEC: boolean, RE: boolean, GSA: boolean) {

    let landPrice = landCostFormula(startingAmount, endingAmount);
    let percentage = 0;

    if (ALA)
        percentage += 5;

    if (AEC)
        percentage += 5;

    if (RE && GSA)
        percentage += 7.5;
    else if (RE)
        percentage += 5;

    landPrice -= getPercentage(landPrice, percentage);

    if (cities > 0)
        landPrice *= cities;

    return landPrice;
}

function landCostFormula(starting_amount: number, ending_amount: number) {
    let value = 0;
    let cost_of_chunk = 0;
    starting_amount = accurateRounding(starting_amount, 2);
    ending_amount = accurateRounding(ending_amount, 2);
    let difference = ending_amount - starting_amount;
    let land_price;

    if (difference > 10000)
        return 0;

    if (difference == 0) {
        value = 0;
        return value;
    }

    if (difference < 0) {
        land_price = 50;
        value = land_price * difference;
        return value;
    }

    if (difference > 500 && (difference % 500 == 0)) {
        cost_of_chunk = accurateRounding(landPrice(starting_amount), 2) * 500;
        value += (cost_of_chunk + landCostFormula((starting_amount + 500), ending_amount));
        return value;
    }

    if (difference > 500 && (difference % 500 != 0)) {
        cost_of_chunk = accurateRounding(landPrice(starting_amount), 2) * (difference % 500);
        value += (cost_of_chunk + landCostFormula((starting_amount + (difference % 500)), ending_amount));
        return value;
    }

    if (difference <= 500) {
        cost_of_chunk = accurateRounding(landPrice(starting_amount), 2) * difference;
        value += cost_of_chunk;
        return value;
    }

    return value;
}

function landPrice(amount: number) {
    return (.002 * (amount - 20) * (amount - 20)) + 50;
}