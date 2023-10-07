import { MMR } from "../../interfaces/data/war";
import { alliance } from "../../interfaces/queries/alliance";
import accurateRounding from "../other/accurateRounding";

export default function allianceMMR(alliance: alliance): MMR {

    if (alliance.nations == undefined) throw new Error(`PnwKit: missing alliance.nations`);
    if (alliance.nations[0].cities == undefined) throw new Error(`PnwKit: missing alliance.nations.cities`);
    if (alliance.nations[0].cities[0].barracks == undefined) throw new Error(`PnwKit: missing alliance.nations.cities.barracks`);
    if (alliance.nations[0].cities[0].factory == undefined) throw new Error(`PnwKit: missing alliance.nations.cities.factory`);
    if (alliance.nations[0].cities[0].hangar == undefined) throw new Error(`PnwKit: missing alliance.nations.cities.hangar`);
    if (alliance.nations[0].cities[0].drydock == undefined) throw new Error(`PnwKit: missing alliance.nations.cities.drydock`);

    let cities = 0;

    let MMR: MMR = {
        totalBarracks: 0,
        totalFactories: 0,
        totalHangars: 0,
        totalDrydocks: 0,
    }

    for (let i = 0; i < alliance.nations.length; i++) {
        let nation = alliance.nations[i];

        for (let j = 0; j < nation.cities.length; j++) {
            let city = nation.cities[j];

            cities++;
            MMR.totalBarracks += city.barracks!;
            MMR.totalFactories += city.factory!;
            MMR.totalHangars += city.hangar!;
            MMR.totalDrydocks += city.drydock!;
        }
    }

    MMR.totalBarracks = accurateRounding(MMR.totalBarracks /= cities, 2);
    MMR.totalFactories = accurateRounding(MMR.totalFactories /= cities, 2);
    MMR.totalHangars = accurateRounding(MMR.totalHangars /= cities, 2);
    MMR.totalDrydocks = accurateRounding(MMR.totalDrydocks /= cities, 2);

    return MMR;
}