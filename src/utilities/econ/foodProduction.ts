import { foodProductionSeasons } from "../../interfaces/data/econ";
import { gameInfo } from "../../interfaces/queries/gameInfo";
import { nation } from "../../interfaces/queries/nation";
import { radiationIndex } from "./cityEffects";

/**
 * Get how much food a nation makes in a day
 * @param {nation} nation The nation in question
 * @param {gameInfo} gameInfo game info
 * @param {foodProductionSeasons} season What season it is for the nation
 * @param {boolean} MI If the nation has mass irrigation
 * @returns {number} How much food said nation produces in a day
 */
export default function foodProduction(nation: nation, gameInfo: gameInfo, season: foodProductionSeasons, MI?: boolean): number {
    if (!nation.continent) throw new Error(`PnwKit: missing nations.continent`);
    if (!nation.cities[0].farm) throw new Error(`PnwKit: missing cities.farms`);
    if (!nation.cities[0].land) throw new Error(`PnwKit: missing cities.land`);
    if (!gameInfo.radiation?.global) throw new Error(`PnwKit: missing game_info.radiation.global`);
    if (!gameInfo.radiation![nation.continent as keyof typeof gameInfo.radiation]) throw new Error(`PnwKit: missing game_info.radiation.global`);

    let cost = 0;
    let landUsed = MI ? 400 : 500;
    let continentRadiation = gameInfo.radiation![nation.continent as keyof typeof gameInfo.radiation];

    for (let i = 0; i < nation.cities.length; i++) {
        let city = nation.cities[i];

        cost += city.farm! * city.land! / landUsed * (1 + Math.max(city.farm! - 1, 0) / 38) * season * (1 + radiationIndex(continentRadiation!, gameInfo.radiation?.global!) / -1000);
    }

    return cost;
}