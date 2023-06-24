import { spyRanges} from "../../interfaces/data/war";

/**
 * Get a nation's spy range
 * @param {number} score The nation's score
 * @returns {spyRanges} spy ranges
 */
export default function spyRange(score: number): spyRanges {
    return {
        OffensiveSpyRangeMin: score * 0.40,
        OffensiveSpyRangeMax: score * 2.50,
        DefensiveSpyRangeMin: score / 0.40,
        DefensiveSpyRangeMax: score / 2.50,
    }
}