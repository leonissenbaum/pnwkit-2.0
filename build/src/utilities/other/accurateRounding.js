"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Accurately round a number
 * @param {number} number The number you want to round
 * @param {number} precision How precise you want the number rounded
 * @returns {number} The number rounded
 */
function accurateRounding(number, precision) {
    let multiplier = Math.pow(10, precision);
    return Math.round(number * multiplier) / multiplier;
}
exports.default = accurateRounding;
