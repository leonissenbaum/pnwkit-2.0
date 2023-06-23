import cityCost from './econ/cityCost';
import foodConsumption from './econ/foodConsumption';
import foodProduction from './econ/foodProduction';
import infraCost from './econ/infraCost';
import landCost from './econ/landCost';
import resourceProduction from './econ/resourceProduction';
import accurateRounding from './other/accurateRounding';
import getPercentage from './other/getPercentage';
import warSpyRanges from './war/warSpyRanges';
import espionageOdds from './war/espionageOdds';
import { groundBattle, airBattle, seaBattle } from './war/battleSimulations';
export default class PnwKitUtils {
    getPercentage: typeof getPercentage;
    accurateRounding: typeof accurateRounding;
    infraCost: typeof infraCost;
    landCost: typeof landCost;
    cityCost: typeof cityCost;
    foodProduciton: typeof foodProduction;
    foodConsumption: typeof foodConsumption;
    resourceProduction: typeof resourceProduction;
    warSpyranges: typeof warSpyRanges;
    espionageOdds: typeof espionageOdds;
    groundBattle: typeof groundBattle;
    airBattle: typeof airBattle;
    seaBattle: typeof seaBattle;
}
