"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accurateRounding_1 = __importDefault(require("../other/accurateRounding"));
const getPercentage_1 = __importDefault(require("../other/getPercentage"));
/**
 * Get the cost of infra
 * @param {number} startingAmount The amount of infra you start with
 * @param {number} endingAmount The amount of infra you want to be at
 * @param {number} cities How many cities you are building this infra in
 * @param {boolean} CCE If you have Center of Civil Engineering
 * @param {boolean} AEC If you have Advanced Engineering Corps
 * @param {boolean} URB If you have Urbanization
 * @param {boolean} GSA If you have Government Agency Support
 * @returns {number} The cost of infra
 */
function infraCost(startingAmount, endingAmount, cities, CCE, AEC, URB, GSA) {
    let infraPrice = infraCostFormula(startingAmount, endingAmount);
    let percentage = 0;
    if (CCE)
        percentage += 5;
    if (AEC)
        percentage += 5;
    if (URB && GSA)
        percentage += 7.5;
    else if (URB)
        percentage += 5;
    infraPrice -= (0, getPercentage_1.default)(infraPrice, percentage);
    if (cities > 0)
        infraPrice *= cities;
    return infraPrice;
}
exports.default = infraCost;
function infraCostFormula(startingAmount, endingAmount) {
    let value = 0;
    let cost_of_chunk = 0;
    startingAmount = (0, accurateRounding_1.default)(startingAmount, 2);
    endingAmount = (0, accurateRounding_1.default)(endingAmount, 2);
    let difference = endingAmount - startingAmount;
    let infra_price;
    if (difference > 10000) {
        return 0;
    }
    if (difference == 0) {
        value = 0;
        return value;
    }
    if (difference < 0) {
        infra_price = 150;
        value = infra_price * difference;
        return value;
    }
    if (difference > 100 && (difference % 100 == 0)) {
        cost_of_chunk = (0, accurateRounding_1.default)(InfraPrice(startingAmount), 2) * 100;
        value += (cost_of_chunk + infraCostFormula((startingAmount + 100), endingAmount));
        return value;
    }
    if (difference > 100 && (difference % 100 != 0)) {
        cost_of_chunk = (0, accurateRounding_1.default)(InfraPrice(startingAmount), 2) * (difference % 100);
        value += (cost_of_chunk + infraCostFormula((startingAmount + (difference % 100)), endingAmount));
        return value;
    }
    if (difference <= 100) {
        cost_of_chunk = (0, accurateRounding_1.default)(InfraPrice(startingAmount), 2) * difference;
        value += cost_of_chunk;
        return value;
    }
    return value;
}
function InfraPrice(amount) {
    return (Math.pow(Math.abs(amount - 10), 2.2) / 710) + 300;
}
