import { warRanges } from "../../interfaces/data/war";

/**
 * Get war/spy ranges
 * @param {number} score The nation's score
 * @returns {warRanges} war/spy ranges
 */
export default function warSpyRanges(score: number): warRanges {
    return {
        war: {
            OffensiveWarRangeMin: score * 0.75,
            OffensiveWarRangeMax: score * 1.75,
            DefensiveWarRangeMin: score / 0.75,
            DefensiveWarRangeMax: score / 1.75,
        },
        spy: {
            OffensiveSpyRangeMin: score * 0.40,
            OffensiveSpyRangeMax: score * 2.50,
            DefensiveSpyRangeMin: score / 0.40,
            DefensiveSpyRangeMax: score / 2.50,
        }
    }
}