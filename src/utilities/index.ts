import cityCost from './econ/cityCost';
import foodConsumption from './econ/foodConsumption';
import foodProduction from './econ/foodProduction';
import infraCost from './econ/infraCost';
import landCost from './econ/landCost';
import resourceProduction from './econ/resourceProduction';
import accurateRounding from './other/accurateRounding';
import getPercentage from './other/getPercentage';
import warSpyRanges from './war/warSpyranges';
import espionageOdds from './war/espionageOdds';
import { groundBattle } from './war/battleSimulations'

export default class PnwKitUtils {
    getPercentage = getPercentage;
    accurateRounding = accurateRounding;
    infraCost = infraCost;
    landCost = landCost;
    cityCost = cityCost;
    foodProduciton = foodProduction;
    foodConsumption = foodConsumption;
    resourceProduction = resourceProduction;
    warSpyranges = warSpyRanges;
    espionageOdds = espionageOdds;
    groundBattle = groundBattle;
}