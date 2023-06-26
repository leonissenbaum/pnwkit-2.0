
/**
 * Get the income of your nation
 * @param {number} cities How many cities you have
 * @param {number} commerce What your commerce is at
 * @param {number} population How many people live in your city
 * @param {boolean} OP If you are running open markets
 * @param {boolean} GSA If you have Government Support Agency
 * @returns {number} How much money a you produce in a day
 */
export default function cityIncome(cities: number, commerce: number, population: number, OP: boolean, GSA: boolean): number {
    
    let multipler = (OP && GSA) ? 1.015 : (OP ? 1.01 : 1)
    return (((((commerce / 50) * 0.725) + 0.725) * population) * multipler) * cities;
}