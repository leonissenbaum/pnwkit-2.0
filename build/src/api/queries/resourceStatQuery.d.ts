import { Kit } from '../..';
import { queryResourceStatsOrderByOrderByClause, resourceStat, resourceStatPaginator } from '../../interfaces/queries/resourceStat';
export interface Parameters {
    before?: Date;
    after?: Date;
    orderBy?: queryResourceStatsOrderByOrderByClause;
    first: number;
    page?: number;
}
/**
 * Gets a list of resources statistics
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<resourceStat[] | resourceStatPaginator>} The resource stats queried or as paginated
 */
export default function resourceStatQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<resourceStat[]>;
export default function resourceStatQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<resourceStatPaginator>;
