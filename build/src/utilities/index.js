"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cityCost_1 = __importDefault(require("./econ/cityCost"));
const foodConsumption_1 = __importDefault(require("./econ/foodConsumption"));
const foodProduction_1 = __importDefault(require("./econ/foodProduction"));
const infraCost_1 = __importDefault(require("./econ/infraCost"));
const landCost_1 = __importDefault(require("./econ/landCost"));
const resourceProduction_1 = __importDefault(require("./econ/resourceProduction"));
const accurateRounding_1 = __importDefault(require("./other/accurateRounding"));
const getPercentage_1 = __importDefault(require("./other/getPercentage"));
const warSpyRanges_1 = __importDefault(require("./war/warSpyRanges"));
const espionageOdds_1 = __importDefault(require("./war/espionageOdds"));
const battleSimulations_1 = require("./war/battleSimulations");
class PnwKitUtils {
    constructor() {
        this.getPercentage = getPercentage_1.default;
        this.accurateRounding = accurateRounding_1.default;
        this.infraCost = infraCost_1.default;
        this.landCost = landCost_1.default;
        this.cityCost = cityCost_1.default;
        this.foodProduciton = foodProduction_1.default;
        this.foodConsumption = foodConsumption_1.default;
        this.resourceProduction = resourceProduction_1.default;
        this.warSpyranges = warSpyRanges_1.default;
        this.espionageOdds = espionageOdds_1.default;
        this.groundBattle = battleSimulations_1.groundBattle;
        this.airBattle = battleSimulations_1.airBattle;
        this.seaBattle = battleSimulations_1.seaBattle;
    }
}
exports.default = PnwKitUtils;
//# sourceMappingURL=index.js.map