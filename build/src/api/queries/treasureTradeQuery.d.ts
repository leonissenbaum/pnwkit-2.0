import { Kit } from '../..';
import { queryTreasureTradesOrderByOrderByClause, treasureTrade, treasureTradePaginator } from '../../interfaces/queries/treasureTrade';
export interface Parameters {
    id?: number[];
    nation_id?: number[];
    min_id?: number[];
    max_id?: number[];
    orderBy?: queryTreasureTradesOrderByOrderByClause;
    first?: number;
    page?: number;
}
/**
 * Gets a list of treasure trades
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<treasureTrade[] | treasureTradePaginator>} The nations queried or as paginated
 */
export default function treasureTradeQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<treasureTrade[]>;
export default function treasureTradeQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<treasureTradePaginator>;
