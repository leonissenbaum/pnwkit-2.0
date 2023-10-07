import { alliance } from "../../interfaces/queries/alliance";
import { tiering } from "../../interfaces/data/war";
import { nation } from "../../interfaces/queries/nation";

export default function sphereTiering(alliances: alliance[]): tiering {

    if (alliances[0].nations == undefined) throw new Error(`PnwKit: missing alliances.nations`);
    if (alliances[0].nations[0].num_cities == undefined) throw new Error(`PnwKit: missing alliances.nations.num_cities`);
    if (alliances[0].nations[0].alliance_position == undefined) throw new Error(`PnwKit: missing alliances.nations.alliance_position`);
    if (alliances[0].nations[0].vacation_mode_turns == undefined) throw new Error(`PnwKit: missing alliances.nations.vacation_mode_turns`);

    let combinedAlliances = combineAlliances(alliances);

    //this is so inefficient lmfao
    let tiering: tiering = {
        10: combinedAlliances.filter((nation) => nation.num_cities! <= 10 && nation).length,
        11: combinedAlliances.filter((nation) => nation.num_cities! >= 11 && nation.num_cities! <= 12).length,
        13: combinedAlliances.filter((nation) => nation.num_cities! >= 13 && nation.num_cities! <= 14).length,
        15: combinedAlliances.filter((nation) => nation.num_cities! >= 15 && nation.num_cities! <= 16).length,
        17: combinedAlliances.filter((nation) => nation.num_cities! >= 17 && nation.num_cities! <= 18).length,
        19: combinedAlliances.filter((nation) => nation.num_cities! >= 19 && nation.num_cities! <= 20).length,
        21: combinedAlliances.filter((nation) => nation.num_cities! >= 21 && nation.num_cities! <= 23).length,
        24: combinedAlliances.filter((nation) => nation.num_cities! >= 24 && nation.num_cities! <= 26).length,
        27: combinedAlliances.filter((nation) => nation.num_cities! >= 27 && nation.num_cities! <= 30).length,
        31: combinedAlliances.filter((nation) => nation.num_cities! >= 31 && nation.num_cities! <= 34).length,
        35: combinedAlliances.filter((nation) => nation.num_cities! >= 35 && nation.num_cities! <= 39).length,
        40: combinedAlliances.filter((nation) => nation.num_cities! >= 40 && nation.num_cities! <= 44).length,
        45: combinedAlliances.filter((nation) => nation.num_cities! >= 45 && nation.num_cities! <= 49).length,
        50: combinedAlliances.filter((nation) => nation.num_cities! >= 50).length,
    }

    return tiering;
}

function combineAlliances(alliances: alliance[]): nation[] {

    let nations: nation[] = [];

    for (let i = 0; i < alliances.length; i++) {
        let filteredAlliances = alliances[i].nations?.filter((nation) => nation.alliance_position != "APPLICANT" && nation.vacation_mode_turns == 0)
        nations.push(...filteredAlliances!);
    }

    return nations;
}