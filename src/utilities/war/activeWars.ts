import { activeWars } from "../../interfaces/data/war"
import { war } from "../../interfaces/queries/war"

/**
 * Get how many active wars a nation has
 * @param {number} nation_id The nation's id
 * @param {war} wars That nation's war data (must include 'turns_left' and 'def_id')
 * @returns {activeWars} how many offensive and defensive wars the nation has
 */
export default function activeWars(nation_id: number, wars: war[]): activeWars {

    if (wars.length == 0)
        return {
            offensive: 0,
            defensive: 0,
        }

    if (!wars[0].turns_left) throw new Error('PnwKit: missing turns_left');
    if (!wars[0].def_id) throw new Error('PnwKit: missing def_id');

    let oWars = 0;
    let dWars = 0;

    for (let i = 0; i < wars.length; i++) {

        if (wars[i].turns_left! > 0)
            if (parseInt(wars[i].def_id!) == nation_id)
                dWars++;
            else
                oWars++;
    }

    return {
        offensive: oWars,
        defensive: dWars,
    }
}