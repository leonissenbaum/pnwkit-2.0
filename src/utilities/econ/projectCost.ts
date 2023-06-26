import { projects, resourcePrices } from "../../interfaces/data/econ";
import getPercentage from "../other/getPercentage";

/**
 * Get the cost of any project
 * @param {projects} project The project you want to get the cost of
 * @param {resourcePrices} resourcePrices The prices of each resource
 * @param {boolean} TA If you have Technology Advancement
 * @param {boolean} GSA If you have Government Support Agency
 * @returns {number} The cost of the project
 */
export default function projectCost(project: projects, resourcePrices: resourcePrices, TA: boolean, GSA: boolean): number {

    let key: keyof typeof resourcePrices;
    for (key in resourcePrices) {

        if (!resourcePrices[key]) throw new Error(`PnwKit: missing resource: ${key}`);
    }

    let percentage = 100 - ((TA && GSA) ? 7.5 : (TA ? 5 : 0));
    let price = 0;

    switch (project) {

        case projects.AC:
            price = getPercentage(500000 + (resourcePrices.food * 1000), percentage)
            break;

        case projects.AUP:
            price = getPercentage((resourcePrices.aluminum * 40000) + (resourcePrices.munitions * 20000) + (resourcePrices.steel * 20000) + (resourcePrices.food * 2500000) + (resourcePrices.uranium * 10000), percentage);
            break;

        case projects.AEC:
            price = getPercentage(50000000 + (resourcePrices.munitions * 10000) + (resourcePrices.gasoline * 10000) + (resourcePrices.uranium * 1000), percentage);
            break;

        case projects.ALA:
            price = getPercentage(3000000 + (resourcePrices.coal * 1500) + (resourcePrices.lead * 1500), percentage);
            break;

        case projects.AS:
            price = getPercentage(4000000 + (resourcePrices.steel * 125) + (resourcePrices.aluminum * 125), percentage);
            break;

        case projects.BW:
            price = getPercentage(5000000 + (resourcePrices.steel * 750) + (resourcePrices.gasoline * 1500), percentage);
            break;

        case projects.CoCE:
            price = getPercentage(3000000 + (resourcePrices.oil * 1000) + (resourcePrices.iron * 1000) + (resourcePrices.bauxite * 1000), percentage);
            break;

        case projects.CRC:
            price = getPercentage(10000000 + (resourcePrices.food * 100000), percentage);
            break;

        case projects.EGR:
            price = getPercentage(4000000 + (resourcePrices.steel * 125) + (resourcePrices.aluminum * 125), percentage);
            break;

        case projects.FS:
            price = getPercentage(25000000 + (resourcePrices.food * 100000) + (resourcePrices.lead * 10000) + (resourcePrices.steel * 10000) + (resourcePrices.aluminum * 10000), percentage);
            break;

        case projects.GT:
            price = getPercentage(100000000 + (resourcePrices.aluminum * 10000) + (resourcePrices.steel * 10000) + (resourcePrices.food * 250000) + (resourcePrices.iron * 100000), percentage);
            break;

        case projects.GSA:
            price = getPercentage(20000000 + (resourcePrices.aluminum * 10000) + (resourcePrices.food * 200000), percentage);
            break;

        case projects.IA:
            price = getPercentage(5000000 + (resourcePrices.steel * 500) + (resourcePrices.gasoline * 500), percentage);
            break;

        case projects.ITC:
            price = getPercentage(45000000 + (resourcePrices.steel * 2500) + (resourcePrices.aluminum * 2500) + (resourcePrices.gasoline * 500), percentage);
            break;

        case projects.ID:
            price = getPercentage(6000000 + (resourcePrices.steel * 1250) + (resourcePrices.aluminum * 500) + (resourcePrices.gasoline * 500), percentage);
            break;

        case projects.IW:
            price = getPercentage(5000000 + (resourcePrices.aluminum * 750) + (resourcePrices.gasoline * 1500), percentage);
            break;

        case projects.MI:
            price = getPercentage(3000000 + (resourcePrices.steel * 500) + (resourcePrices.aluminum * 500), percentage);
            break;

        case projects.MP:
            price = getPercentage((resourcePrices.aluminum * 60000) + (resourcePrices.steel * 40000) + (resourcePrices.uranium * 30000) + (resourcePrices.lead * 15000) + (resourcePrices.iron * 15000) + (resourcePrices.bauxite * 15000) + (resourcePrices.oil * 10000) + (resourcePrices.coal * 15000), percentage);
            break;

        case projects.MS:
            price = getPercentage(20000000 + (resourcePrices.aluminum * 5000) + (resourcePrices.steel * 5000) + (resourcePrices.gasoline * 5000), percentage);
            break;

        case projects.MLP:
            price = getPercentage(8000000 + (resourcePrices.steel * 1000) + (resourcePrices.gasoline * 350), percentage);
            break;

        case projects.ML:
            price = getPercentage(50000000 + (resourcePrices.oil * 5000) + (resourcePrices.aluminum * 5000) + (resourcePrices.munitions * 5000) + (resourcePrices.steel * 5000) + (resourcePrices.gasoline * 5000) + (resourcePrices.uranium * 10000), percentage);
            break;

        case projects.PE:
            price = getPercentage(25000000 + (resourcePrices.aluminum * 10000) + (resourcePrices.munitions * 10000) + (resourcePrices.gasoline * 10000) + (resourcePrices.steel * 10000), percentage);
            break;

        case projects.PB:
            price = getPercentage(15000000 + (resourcePrices.aluminum * 1500), percentage);
            break;

        case projects.RI:
            price = getPercentage(10000000 + (resourcePrices.food * 100000), percentage);
            break;

        case projects.RnD:
            price = getPercentage(50000000 + (resourcePrices.aluminum * 5000) + (resourcePrices.food * 100000) + (resourcePrices.uranium * 1000), percentage);
            break;

        case projects.SP:
            price = getPercentage(40000000 + (resourcePrices.oil * 20000) + (resourcePrices.aluminum * 1000) + (resourcePrices.steel * 1000) + (resourcePrices.gasoline * 5000) + (resourcePrices.iron * 10000) + (resourcePrices.uranium * 20000), percentage);
            break;

        case projects.SPTP:
            price = getPercentage(10000000 + (resourcePrices.food * 100000), percentage);
            break;

        case projects.SS:
            price = getPercentage(20000000 + (resourcePrices.oil * 10000) + (resourcePrices.bauxite * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.lead * 10000) + (resourcePrices.uranium * 10000), percentage);
            break;

        case projects.TS:
            price = getPercentage(300000000 + (resourcePrices.oil * 10000) + (resourcePrices.aluminum * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.uranium * 10000), percentage);
            break;

        case projects.UEP:
            price = getPercentage(21000000 + (resourcePrices.uranium * 500) + (resourcePrices.aluminum * 1000) + (resourcePrices.gasoline * 1000), percentage);
            break;

        case projects.UP:
            price = getPercentage((resourcePrices.coal * 10000) + (resourcePrices.oil * 10000) + (resourcePrices.aluminum * 20000) + (resourcePrices.munitions * 10000) + (resourcePrices.gasoline * 10000) + (resourcePrices.food * 1000000), percentage);
            break;

        case projects.AC:
            price = getPercentage(40000000 + (resourcePrices.steel * 6500) + (resourcePrices.aluminum * 3000) + (resourcePrices.gasoline * 5000), percentage);
            break;
    }

    return price;
}