import { warRanges } from "../../interfaces/data/war";

/**
 * Get war ranges
 * @param {number} score The nation's score
 * @returns {warRanges} war ranges
 */
export default function warRange(score: number): warRanges {
    return {
        OffensiveWarRangeMin: score * 0.75,
        OffensiveWarRangeMax: score * 1.75,
        DefensiveWarRangeMin: score / 0.75,
        DefensiveWarRangeMax: score / 1.75,
    }
}