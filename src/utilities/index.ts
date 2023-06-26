import cityCost from './econ/cityCost';
import foodConsumption from './econ/foodConsumption';
import foodProduction from './econ/foodProduction';
import infraCost from './econ/infraCost';
import landCost from './econ/landCost';
import resourceProduction from './econ/resourceProduction';
import accurateRounding from './other/accurateRounding';
import getPercentage from './other/getPercentage';
import spyRange from './war/spyRange';
import warRange from './war/warRange';
import espionageOdds from './war/espionageOdds';
import { groundBattle, airBattle, seaBattle } from './war/battleSimulations';
import { pollution, pollutionIndex, crime, disease } from './econ/cityEffects';
import projectCost from './econ/projectCost';

export default class PnwKitUtils {
    getPercentage = getPercentage;
    accurateRounding = accurateRounding;
    infraCost = infraCost;
    landCost = landCost;
    cityCost = cityCost;
    foodProduciton = foodProduction;
    foodConsumption = foodConsumption;
    resourceProduction = resourceProduction;
    warRange = warRange;
    spyRange = spyRange;
    espionageOdds = espionageOdds;
    groundBattle = groundBattle;
    airBattle = airBattle;
    seaBattle = seaBattle;
    pollution = pollution;
    pollutionIndex = pollutionIndex;
    crime = crime;
    disease = disease;
    projectCost = projectCost;
}