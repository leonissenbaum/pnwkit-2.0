import { Kit } from '../..';
import { city, cityPaginator, queryCitiesOrderByOrderByClause } from '../../interfaces/queries/city';
export interface Parameters {
    id?: number[];
    nation_id?: number[];
    orderBy?: queryCitiesOrderByOrderByClause;
    first?: number;
    page?: number;
}
/**
 * Gets a list of cities
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<city[] | cityPaginator>}
 */
export default function cityQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<city[]>;
export default function cityQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<cityPaginator>;
