"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Accurately round a number
 * @param {number} number The number you want to get the percentage of
 * @param {number} percentage How big the percentage is
 * @returns {number} The percentage of the number given
 */
function getPercentage(number, percentage) {
    return (percentage / 100) * number;
}
exports.default = getPercentage;
