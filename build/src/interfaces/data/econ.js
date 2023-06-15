"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceType = exports.foodProductionSeasons = void 0;
var foodProductionSeasons;
(function (foodProductionSeasons) {
    foodProductionSeasons[foodProductionSeasons["SPRING"] = 1] = "SPRING";
    foodProductionSeasons[foodProductionSeasons["SUMMER"] = 1.2] = "SUMMER";
    foodProductionSeasons[foodProductionSeasons["FALL"] = 1] = "FALL";
    foodProductionSeasons[foodProductionSeasons["WINTER"] = 0.8] = "WINTER";
})(foodProductionSeasons = exports.foodProductionSeasons || (exports.foodProductionSeasons = {}));
var resourceType;
(function (resourceType) {
    resourceType["OIL"] = "oil";
    resourceType["LEAD"] = "lead";
    resourceType["BAUXITE"] = "bauxite";
    resourceType["URANIUM"] = "uranium";
    resourceType["COAL"] = "coal";
    resourceType["IRON"] = "iron";
    resourceType["STEEL"] = "steel";
    resourceType["ALUMINUM"] = "aluminum";
    resourceType["GASOLINE"] = "gasoline";
    resourceType["MUNITIONS"] = "munitions";
})(resourceType = exports.resourceType || (exports.resourceType = {}));
