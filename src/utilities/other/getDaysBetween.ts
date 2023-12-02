/**
 * Get how many days between two dates
 * @param {number} start The start Date
 * @param {number} end The end date
 * @returns {number} How many days between the two dates
 */
export default function getDaysBetween(start: Date, end: Date): number {

    return (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
}