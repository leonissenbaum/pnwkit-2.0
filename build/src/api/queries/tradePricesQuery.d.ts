import { Kit } from '../..';
import { tradeprice, tradePricePaginator } from '../../interfaces/queries/tradePrice';
export interface Parameters {
    first?: number;
    page?: number;
}
/**
 * Gets a list of trade prices
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true, returns paginator information
 * @return {Promise<tradeprice[] | tradepricePaginator>}
 */
export default function tradePricesQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<tradeprice[]>;
export default function tradePricesQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<tradePricePaginator>;
