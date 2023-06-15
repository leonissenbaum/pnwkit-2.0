/**
 * Accurately round a number
 * @param {number} number The number you want to get the percentage of
 * @param {number} percentage How big the percentage is
 * @returns {number} The percentage of the number given
 */
export default function getPercentage(number: number, percentage: number): number {

    return (percentage / 100) * number;
}